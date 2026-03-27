'use client'

import { Button } from '@components/ui/button'
import { useTransition } from 'react'
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

  function handleStart() {
    startTransition(async () => {
      try {
        await onStartWorkout()
        toast.success('Treino iniciado!')
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
      <div className="w-full">
        <Button
          onClick={handleComplete}
          loading={isPending}
          className="font-display w-full rounded-xl py-6 text-sm font-semibold"
        >
          Concluir treino
        </Button>
      </div>
    )
  }

  return (
    <div className="w-full">
      <Button
        onClick={handleStart}
        loading={isPending}
        className="font-display w-full rounded-xl py-6 text-sm font-semibold"
      >
        Iniciar treino
      </Button>
    </div>
  )
}
