'use client'

import { Button } from '@components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@components/ui/dialog'
import { authClient } from '@lib/auth-client'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

export function SignOutButton() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [isPending, setIsPending] = useState(false)

  async function handleSignOut() {
    setIsPending(true)
    try {
      await authClient.signOut()
      toast.success('Você saiu da conta.')
      router.push('/login')
    } catch {
      toast.error('Erro ao sair da conta. Tente novamente.')
      setIsPending(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="flex cursor-pointer flex-row items-center justify-center gap-2 rounded-full border-none bg-transparent px-4 py-2"
        >
          <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[16px] leading-none font-semibold text-red-500">
            Sair da conta
          </span>
          <LogOut className="size-4 text-red-500" strokeWidth={1.6} />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sair da conta</DialogTitle>
          <DialogDescription>
            Tem certeza que deseja sair da conta? Você precisará fazer login
            novamente para acessar o aplicativo.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={handleSignOut}
            disabled={isPending}
            loading={isPending}
          >
            Sair
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
