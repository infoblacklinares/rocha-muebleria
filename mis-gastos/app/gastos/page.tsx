'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { formatCLP, getShortDayName, getDayName, getDateString, getWeekDays } from '@/lib/gastos-utils'

interface Expense {
  fecha: string
  dia: string
  monto: number
  descripcion: string
  timestamp: string
}

export default function GastosPage() {
  const today = getDateString()
  const weekDays = getWeekDays()

  const [selectedDate, setSelectedDate] = useState(today)
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [loading, setLoading] = useState(true)
  const [monto, setMonto] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [adding, setAdding] = useState(false)
  const [error, setError] = useState('')

  const fetchExpenses = useCallback(async (fecha: string) => {
    setLoading(true)
    try {
      const res = await fetch(`/api/gastos?fecha=${fecha}`)
      const data = await res.json()
      setExpenses(Array.isArray(data) ? data : [])
    } catch {
      setExpenses([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchExpenses(selectedDate)
  }, [selectedDate, fetchExpenses])

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    const raw = parseInt(monto.replace(/\D/g, ''), 10)
    if (!raw || !descripcion.trim()) return

    setAdding(true)
    setError('')
    try {
      const res = await fetch('/api/gastos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ monto: raw, descripcion: descripcion.trim(), fecha: selectedDate }),
      })
      if (!res.ok) throw new Error()
      setMonto('')
      setDescripcion('')
      await fetchExpenses(selectedDate)
    } catch {
      setError('No se pudo agregar el gasto. Verifica la configuración.')
    } finally {
      setAdding(false)
    }
  }

  const total = expenses.reduce((s, e) => s + e.monto, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900">💰 Mis Gastos</h1>
          <Link
            href="/gastos/semana"
            className="text-sm text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
          >
            Resumen semanal &rarr;
          </Link>
        </div>
      </header>

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-lg mx-auto px-4 py-3">
          <div className="grid grid-cols-7 gap-1">
            {weekDays.map(date => {
              const isToday = date === today
              const isSelected = date === selectedDate
              const isFuture = date > today
              return (
                <button
                  key={date}
                  onClick={() => !isFuture && setSelectedDate(date)}
                  disabled={isFuture}
                  className={`py-2 rounded-xl text-center transition-colors ${
                    isSelected
                      ? 'bg-emerald-500 text-white'
                      : isToday
                      ? 'bg-emerald-50 text-emerald-700'
                      : isFuture
                      ? 'text-gray-300 cursor-default'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="text-[11px] font-semibold uppercase">{getShortDayName(date)}</div>
                  <div className="text-sm font-bold">{parseInt(date.split('-')[2])}</div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-4 space-y-4">
        <div className="bg-emerald-500 rounded-2xl p-5 text-white">
          <p className="text-emerald-100 text-sm capitalize">
            {getDayName(selectedDate)}{selectedDate === today ? ' — hoy' : ''}
          </p>
          <p className="text-4xl font-bold mt-1 tabular-nums">{formatCLP(total)}</p>
          <p className="text-emerald-100 text-sm mt-1">
            {expenses.length} gasto{expenses.length !== 1 ? 's' : ''}
          </p>
        </div>

        <form
          onSubmit={handleAdd}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 space-y-3"
        >
          <h2 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Agregar gasto</h2>
          <div className="flex gap-2">
            <div className="relative w-36">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">$</span>
              <input
                type="text"
                inputMode="numeric"
                value={monto ? Number(monto).toLocaleString('es-CL') : ''}
                onChange={e => setMonto(e.target.value.replace(/\D/g, ''))}
                placeholder="0"
                className="w-full pl-6 pr-2 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right font-semibold tabular-nums"
              />
            </div>
            <input
              type="text"
              value={descripcion}
              onChange={e => setDescripcion(e.target.value)}
              placeholder="¿En qué se gastó?"
              className="flex-1 px-3 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              maxLength={80}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={adding || !monto || !descripcion.trim()}
            className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-100 disabled:text-gray-400 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
          >
            {adding ? 'Guardando...' : '+ Agregar'}
          </button>
        </form>

        <div className="space-y-2 pb-8">
          {loading ? (
            <div className="text-center py-10 text-gray-400 text-sm">Cargando...</div>
          ) : expenses.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              <p className="text-base">Sin gastos registrados</p>
              <p className="text-sm mt-1">Agrega tu primer gasto del día</p>
            </div>
          ) : (
            [...expenses].reverse().map((expense, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 px-4 py-3 flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <p className="font-medium text-gray-900 truncate">{expense.descripcion}</p>
                  {expense.timestamp && (
                    <p className="text-xs text-gray-400 mt-0.5">
                      {new Date(expense.timestamp).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  )}
                </div>
                <p className="font-semibold text-gray-900 tabular-nums whitespace-nowrap">
                  {formatCLP(expense.monto)}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
