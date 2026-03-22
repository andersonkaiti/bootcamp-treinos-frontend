'use client'

import { Sparkles } from 'lucide-react'
import Image from 'next/image'
import { parseAsBoolean, parseAsString, useQueryStates } from 'nuqs'

interface ExerciseCardProps {
  name: string
  sets?: number
  reps?: number
  duration?: string
  imageUrl?: string
}

export function ExerciseCard({
  name,
  sets,
  reps,
  duration,
  imageUrl,
}: ExerciseCardProps) {
  const [, setParams] = useQueryStates({
    chat_open: parseAsBoolean.withDefault(false),
    chat_initial_message: parseAsString.withDefault(''),
  })

  function handleAskAI() {
    setParams({
      chat_open: true,
      chat_initial_message: `Como executar o exercício ${name} corretamente?`,
    })
  }

  return (
    <div className="flex flex-row items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:bg-gray-50">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={name}
          width={48}
          height={48}
          className="size-12 rounded-lg object-cover"
        />
      )}

      <div className="flex-1">
        <p className="font-[family-name:var(--font-inter-tight),sans-serif] text-sm leading-[140%] font-semibold text-black">
          {name}
        </p>
        {(sets || reps || duration) && (
          <p className="mt-[2px] font-[family-name:var(--font-inter-tight),sans-serif] text-xs leading-[140%] font-normal text-gray-500">
            {sets && reps ? `${sets} séries × ${reps} reps` : duration}
          </p>
        )}
      </div>

      <button
        onClick={handleAskAI}
        aria-label={`Perguntar à IA como executar ${name}`}
        className="border-primary/8 bg-primary/8 text-primary hover:bg-primary/15 flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-colors"
      >
        <Sparkles className="size-4" strokeWidth={1.5} />
      </button>
    </div>
  )
}
