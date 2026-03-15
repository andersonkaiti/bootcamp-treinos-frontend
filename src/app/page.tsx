'use client'

import { Button } from '@components/ui/button'
import { authClient } from '@lib/auth-client'
import { redirect } from 'next/navigation'

export default function HomePage() {
  const { data: session, isPending } = authClient.useSession()

  if (isPending) {
    return null
  }

  if (!session) {
    redirect('/login')
  }

  async function handleLogout() {
    await authClient.signOut()

    redirect('/login')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-black p-8 text-white">
      <h1 className="text-center text-2xl font-bold">
        Boas-vindas, {session?.user?.name || 'Usuário'}!
      </h1>
      <p className="mt-2 text-center text-white/70">
        Você está logado no Fit.ai
      </p>

      <Button onClick={handleLogout} className="p-4">
        Sair
      </Button>
    </main>
  )
}
