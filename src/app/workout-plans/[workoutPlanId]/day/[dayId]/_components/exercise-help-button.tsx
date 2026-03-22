'use client'

import { CircleHelp } from 'lucide-react'
import { parseAsBoolean, parseAsString, useQueryStates } from 'nuqs'

interface ExerciseHelpButtonProps {
  name: string
  sets: number
  reps: number
  restTimeInSeconds: number
}

export function ExerciseHelpButton({
  name,
  sets,
  reps,
  restTimeInSeconds,
}: ExerciseHelpButtonProps) {
  const [, setParams] = useQueryStates({
    chat_open: parseAsBoolean.withDefault(false),
    chat_initial_message: parseAsString.withDefault(''),
  })

  function handleClick() {
    setParams({
      chat_open: true,
      chat_initial_message: `Como executar o exercício "${name}" corretamente? Meu plano é ${sets} séries de ${reps} reps com ${restTimeInSeconds}s de descanso.`,
    })
  }

  return (
    <button
      onClick={handleClick}
      className="flex cursor-pointer items-center justify-center"
      type="button"
      aria-label={`Ajuda para ${name}`}
    >
      <CircleHelp className="size-5 text-gray-400" strokeWidth={1.5} />
    </button>
  )
}
