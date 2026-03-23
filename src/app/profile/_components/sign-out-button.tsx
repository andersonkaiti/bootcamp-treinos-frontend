'use client'

import { authClient } from '@lib/auth-client'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function SignOutButton() {
  const router = useRouter()

  async function handleSignOut() {
    try {
      await authClient.signOut()
      toast.success('Você saiu da conta.')
      router.push('/login')
    } catch {
      toast.error('Erro ao sair da conta. Tente novamente.')
    }
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="flex cursor-pointer flex-row items-center justify-center gap-2 rounded-full border-none bg-transparent px-4 py-2"
    >
      <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[16px] leading-none font-semibold text-red-500">
        Sair da conta
      </span>
      <LogOut className="size-4 text-red-500" strokeWidth={1.6} />
    </button>
  )
}
