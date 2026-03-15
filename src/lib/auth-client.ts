import { env } from '@config/env'
import { createAuthClient } from 'better-auth/react'

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_API_URL,
})

authClient.signIn.social({
  provider: 'google',
})
