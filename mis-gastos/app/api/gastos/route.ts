import { NextResponse } from 'next/server'
import { getExpenses, addExpense, ensureWeekSheet } from '@/lib/sheets'
import { getDateString, getWeekSheetName } from '@/lib/gastos-utils'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const fecha = searchParams.get('fecha') ?? getDateString()
  const weekName = getWeekSheetName(fecha)

  await ensureWeekSheet(weekName)
  const all = await getExpenses(weekName)
  const dayExpenses = all.filter(e => e.fecha === fecha)

  return NextResponse.json(dayExpenses)
}

export async function POST(request: Request) {
  const body = await request.json()
  const monto = Number(body.monto)
  const descripcion = String(body.descripcion ?? '').trim()
  const fecha = body.fecha ?? getDateString()

  if (!monto || !descripcion) {
    return NextResponse.json({ error: 'Monto y descripción son requeridos' }, { status: 400 })
  }

  const weekName = getWeekSheetName(fecha)
  await ensureWeekSheet(weekName)
  await addExpense(weekName, { fecha, monto, descripcion })

  return NextResponse.json({ ok: true })
}
