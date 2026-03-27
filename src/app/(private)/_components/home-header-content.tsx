import { authClient } from '@lib/auth-client'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { HomeHeader } from './home-header'

export async function HomeHeaderContent() {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  })

  if (!session?.data?.session) {
    redirect('/login')
  }

  return <HomeHeader userName={session.data.user.name} />
}
