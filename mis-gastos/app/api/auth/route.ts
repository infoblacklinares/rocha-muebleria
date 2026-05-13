import { NextResponse } from 'next/server'

async function computeToken(pin: string): Promise<string> {
  const data = new TextEncoder().encode(`mis-gastos:${pin}`)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function POST(request: Request) {
  const { pin } = await request.json()
  const expectedPin = process.env.GASTOS_PIN

  if (!expectedPin || pin === expectedPin) {
    const token = expectedPin ? await computeToken(expectedPin) : 'public'
    const res = NextResponse.json({ ok: true })
    res.cookies.set('gastos_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7,
    })
    return res
  }

  return NextResponse.json({ error: 'PIN incorrecto' }, { status: 401 })
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true })
  res.cookies.delete('gastos_session')
  return res
}
