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
import { useState, useTransition } from 'react'
import { toast } from 'sonner'

interface WorkoutActionsProps {
  sessionStatus: 'none' | 'in_progress' | 'completed'
  onStartWorkout: () => Promise<void>
  onCompleteWorkout: () => Promise<void>
}

export function WorkoutActions({
  sessionStatus,
  onStartWorkout,
  onCompleteWorkout,
}: WorkoutActionsProps) {
  const [isPending, startTransition] = useTransition()
  const [openStartDialog, setOpenStartDialog] = useState(false)
  const [openCompleteDialog, setOpenCompleteDialog] = useState(false)

  function handleStart() {
    startTransition(async () => {
      try {
        await onStartWorkout()
        toast.success('Treino iniciado!')
        setOpenStartDialog(false)
      } catch {
        toast.error('Erro ao iniciar treino. Tente novamente.')
      }
    })
  }

  function handleComplete() {
    startTransition(async () => {
      try {
        await onCompleteWorkout()
        toast.success('Treino concluído!')
        setOpenCompleteDialog(false)
      } catch {
        toast.error('Erro ao concluir treino. Tente novamente.')
      }
    })
  }

  if (sessionStatus === 'completed') {
    return (
      <div className="flex items-center justify-center rounded-xl bg-[#F1F1F1] px-5 py-4">
        <span className="font-display text-sm font-semibold text-[#656565]">
          Treino concluído ✓
        </span>
      </div>
    )
  }

  if (sessionStatus === 'in_progress') {
    return (
      <Dialog open={openCompleteDialog} onOpenChange={setOpenCompleteDialog}>
        <DialogTrigger asChild>
          <div className="w-full">
            <Button className="font-display w-full rounded-xl py-6 text-sm font-semibold">
              Concluir treino
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Concluir treino</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja concluir este treino? Esta ação não pode
              ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button
              onClick={handleComplete}
              disabled={isPending}
              loading={isPending}
            >
              Concluir
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={openStartDialog} onOpenChange={setOpenStartDialog}>
      <DialogTrigger asChild>
        <div className="w-full">
          <Button className="font-display w-full rounded-xl py-6 text-sm font-semibold">
            Iniciar treino
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Iniciar treino</DialogTitle>
          <DialogDescription>
            Tem certeza que deseja iniciar este treino agora?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button
            onClick={handleStart}
            disabled={isPending}
            loading={isPending}
          >
            Iniciar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
