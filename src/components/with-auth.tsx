import { authClient } from '@lib/auth-client'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export function withAuth<T extends object>(
  Component: (props: T) => Promise<React.JSX.Element>
) {
  return async function AuthenticatedPage(props: T) {
    const session = await authClient.getSession({
      fetchOptions: {
        headers: await headers(),
      },
    })

    if (!session?.data?.session) {
      redirect('/login')
    }

    return Component(props)
  }
}
