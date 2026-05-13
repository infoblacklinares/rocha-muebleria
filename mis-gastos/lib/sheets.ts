import { google } from 'googleapis'
import { getDayName } from './gastos-utils'

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
      private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
}

async function getSheetsClient() {
  return google.sheets({ version: 'v4', auth: getAuth() })
}

export interface Expense {
  fecha: string
  dia: string
  monto: number
  descripcion: string
  timestamp: string
}

const HEADERS = ['Fecha', 'Día', 'Monto', 'Descripción', 'Timestamp']
const SPREADSHEET_ID = () => process.env.SPREADSHEET_ID!

export async function ensureWeekSheet(weekName: string): Promise<void> {
  const sheets = await getSheetsClient()
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId: SPREADSHEET_ID(),
    includeGridData: false,
  })
  const exists = spreadsheet.data.sheets?.some(s => s.properties?.title === weekName)
  if (exists) return

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SPREADSHEET_ID(),
    requestBody: { requests: [{ addSheet: { properties: { title: weekName } } }] },
  })
  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID(),
    range: `'${weekName}'!A1:E1`,
    valueInputOption: 'RAW',
    requestBody: { values: [HEADERS] },
  })
}

export async function addExpense(
  weekName: string,
  data: { fecha: string; monto: number; descripcion: string }
): Promise<void> {
  const sheets = await getSheetsClient()
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID(),
    range: `'${weekName}'!A:E`,
    valueInputOption: 'RAW',
    requestBody: {
      values: [[data.fecha, getDayName(data.fecha), data.monto, data.descripcion, new Date().toISOString()]],
    },
  })
}

export async function getExpenses(weekName: string): Promise<Expense[]> {
  const sheets = await getSheetsClient()
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID(),
      range: `'${weekName}'!A2:E`,
    })
    return (response.data.values ?? [])
      .filter(row => row.length >= 4)
      .map(row => ({
        fecha: String(row[0] ?? ''),
        dia: String(row[1] ?? ''),
        monto: Number(row[2]) || 0,
        descripcion: String(row[3] ?? ''),
        timestamp: String(row[4] ?? ''),
      }))
  } catch {
    return []
  }
}
