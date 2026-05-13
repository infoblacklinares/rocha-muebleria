import Link from 'next/link'
import { getExpenses, ensureWeekSheet } from '@/lib/sheets'
import {
  getDateString,
  getWeekSheetName,
  getWeekDays,
  getDayName,
  formatCLP,
  getISOWeekInfo,
} from '@/lib/gastos-utils'

export const dynamic = 'force-dynamic'

export default async function SemanaPage() {
  const today = getDateString()
  const weekName = getWeekSheetName(today)
  const weekDays = getWeekDays(today)
  const { week, year } = getISOWeekInfo(today)

  await ensureWeekSheet(weekName)
  const all = await getExpenses(weekName)

  const weekTotal = all.reduce((s, e) => s + e.monto, 0)

  const dayData = weekDays.map(date => ({
    date,
    dayName: getDayName(date),
    expenses: all.filter(e => e.fecha === date),
    total: all.filter(e => e.fecha === date).reduce((s, e) => s + e.monto, 0),
    isToday: date === today,
    isFuture: date > today,
  }))

  const maxTotal = Math.max(...dayData.map(d => d.total), 1)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/gastos" className="text-emerald-600 hover:text-emerald-700 transition-colors text-sm font-medium">
            ← Volver
          </Link>
          <h1 className="text-lg font-bold text-gray-900">Semana {week} · {year}</h1>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 py-4 space-y-4 pb-10">
        <div className="bg-emerald-500 rounded-2xl p-5 text-white">
          <p className="text-emerald-100 text-sm">Total de la semana</p>
          <p className="text-4xl font-bold mt-1 tabular-nums">{formatCLP(weekTotal)}</p>
          <p className="text-emerald-100 text-sm mt-1">
            {all.length} gasto{all.length !== 1 ? 's' : ''} registrados
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-5">
          <h2 className="font-semibold text-gray-800 text-sm uppercase tracking-wide mb-4">Por día</h2>
          <div className="space-y-4">
            {dayData.map(day => (
              <div key={day.date}>
                <div className="flex justify-between items-center text-sm mb-1.5">
                  <span className={`font-medium capitalize ${
                    day.isToday ? 'text-emerald-600' : day.isFuture ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {day.dayName}{day.isToday && <span className="text-xs ml-1">(hoy)</span>}
                  </span>
                  <span className={`font-semibold tabular-nums ${day.isFuture ? 'text-gray-300' : 'text-gray-900'}`}>
                    {day.isFuture ? '—' : day.total === 0 ? '$0' : formatCLP(day.total)}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  {!day.isFuture && (
                    <div
                      className={`h-full rounded-full transition-all ${day.isToday ? 'bg-emerald-500' : 'bg-emerald-300'}`}
                      style={{ width: `${(day.total / maxTotal) * 100}%` }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {dayData.filter(d => !d.isFuture && d.expenses.length > 0).map(day => (
          <div key={day.date} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-50 flex justify-between items-center">
              <span className="font-semibold text-gray-800 capitalize">{day.dayName}</span>
              <span className="font-semibold text-emerald-600 tabular-nums">{formatCLP(day.total)}</span>
            </div>
            <div className="divide-y divide-gray-50">
              {day.expenses.map((expense, i) => (
                <div key={i} className="px-4 py-3 flex justify-between items-center gap-3">
                  <span className="text-gray-700 text-sm truncate">{expense.descripcion}</span>
                  <span className="text-gray-900 font-medium text-sm tabular-nums whitespace-nowrap">{formatCLP(expense.monto)}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {all.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <p>Sin gastos esta semana</p>
            <Link href="/gastos" className="text-emerald-600 text-sm mt-2 block hover:underline">← Agregar gastos</Link>
          </div>
        )}
      </div>
    </div>
  )
}
