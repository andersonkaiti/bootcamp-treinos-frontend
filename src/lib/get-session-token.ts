import { getCookie } from 'cookies-next'
import { type cookies } from 'next/headers'

const COOKIE_KEY = 'better-auth.session_token'

export async function getSessionToken() {
  let cookieStore: typeof cookies | undefined

  if (typeof window === 'undefined') {
    const { cookies: serverCookies } = await import('next/headers')

    cookieStore = serverCookies
  }

  const token = await getCookie(COOKIE_KEY, {
    cookies: cookieStore,
  })

  return token
}
