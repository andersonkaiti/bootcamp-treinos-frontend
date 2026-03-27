import { getCookies } from 'cookies-next'

export async function getSessionToken() {
  const options =
    typeof window === 'undefined'
      ? { cookies: await import('next/headers').then((m) => m.cookies) }
      : {}

  const allCookies = await getCookies(options)

  return (
    allCookies?.['__Secure-better-auth.session_token'] ??
    allCookies?.['better-auth.session_token']
  )
}
