'use client'

import { Button } from '@/components/ui/button'

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
      <form action={onCompleteWorkout} className="w-full">
        <Button
          type="submit"
          className="font-display w-full rounded-xl py-6 text-sm font-semibold"
        >
          Concluir treino
        </Button>
      </form>
    )
  }

  return (
    <form action={onStartWorkout} className="w-full">
      <Button
        type="submit"
        className="font-display w-full rounded-xl py-6 text-sm font-semibold"
      >
        Iniciar treino
      </Button>
    </form>
  )
}
