import { env } from '@config/env'
import { getSessionToken } from '@lib/get-session-token'
import { handleUnauthorized } from '@lib/handle-unauthorized'
import ky, { HTTPError } from 'ky'

const client = ky.create({
  prefixUrl: env.NEXT_PUBLIC_API_URL,
  hooks: {
    beforeRequest: [
      async (request) => {
        const token = await getSessionToken()

        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`)
        }
      },
    ],
  },
  credentials: 'include',
})

interface ApiClientConfig extends RequestInit {
  url: string
  data?: unknown
  params?: Record<string, unknown>
}

export async function api<T>(config: ApiClientConfig): Promise<T> {
  const { url, params, data, ...options } = config

  const normalizedUrl = url.replace(/^\//, '')

  try {
    return await client(normalizedUrl, {
      ...options,
      searchParams: params as Record<string, string | number | boolean>,
      json: data,
    }).json()
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 401) {
      handleUnauthorized()
    }

    throw error
  }
}
