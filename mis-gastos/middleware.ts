import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

async function computeToken(pin: string): Promise<string> {
  const data = new TextEncoder().encode(`mis-gastos:${pin}`)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function middleware(request: NextRequest) {
  const pin = process.env.GASTOS_PIN
  if (!pin) return NextResponse.next()

  const session = request.cookies.get('gastos_session')
  const expected = await computeToken(pin)

  if (session?.value === expected) return NextResponse.next()

  const loginUrl = new URL('/login', request.url)
  loginUrl.searchParams.set('from', request.nextUrl.pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/gastos/:path*'],
}
