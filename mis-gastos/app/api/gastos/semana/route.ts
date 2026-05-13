import { NextResponse } from 'next/server'
import { getExpenses, ensureWeekSheet } from '@/lib/sheets'
import { getDateString, getWeekSheetName, getWeekDays, getDayName, getISOWeekInfo } from '@/lib/gastos-utils'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const today = getDateString()
  const weekName = searchParams.get('week') ?? getWeekSheetName(today)
  const weekDays = getWeekDays(today)
  const { week, year } = getISOWeekInfo(today)

  await ensureWeekSheet(weekName)
  const all = await getExpenses(weekName)

  const byDay = weekDays.map(date => ({
    date,
    dayName: getDayName(date),
    expenses: all.filter(e => e.fecha === date),
    total: all.filter(e => e.fecha === date).reduce((s, e) => s + e.monto, 0),
    isToday: date === today,
    isFuture: date > today,
  }))

  return NextResponse.json({
    weekName,
    weekLabel: `Semana ${week}, ${year}`,
    weekTotal: all.reduce((s, e) => s + e.monto, 0),
    totalExpenses: all.length,
    byDay,
  })
}
