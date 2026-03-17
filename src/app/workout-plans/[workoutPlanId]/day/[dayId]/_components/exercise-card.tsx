import { CircleHelp, Zap } from 'lucide-react'

import type { GetWorkoutDay200ExercisesItem } from '@/http/api-client-generated'

interface ExerciseCardProps {
  exercise: GetWorkoutDay200ExercisesItem
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  const restTime = exercise.restTimeInSeconds / 60

  return (
    <div className="flex items-start justify-between rounded-xl border border-[#F1F1F1] p-5">
      <div className="flex flex-col gap-3">
        <h3 className="font-display text-base font-semibold text-black">
          {exercise.name}
        </h3>

        <div className="flex items-center gap-1.5">
          <span className="flex items-center justify-center rounded-full bg-[#F1F1F1] px-2.5 py-1">
            <span className="font-display text-xs font-semibold text-[#656565] uppercase">
              {exercise.sets} séries
            </span>
          </span>
          <span className="flex items-center justify-center rounded-full bg-[#F1F1F1] px-2.5 py-1">
            <span className="font-display text-xs font-semibold text-[#656565] uppercase">
              {exercise.reps} reps
            </span>
          </span>
          <span className="flex items-center gap-1 rounded-full bg-[#F1F1F1] px-2.5 py-1">
            <Zap className="h-3.5 w-3.5 text-[#656565]" strokeWidth={1.75} />
            <span className="font-display text-xs font-semibold text-[#656565] uppercase">
              {restTime}s
            </span>
          </span>
        </div>
      </div>

      <button className="flex items-center justify-center" type="button">
        <CircleHelp className="h-5 w-5 text-[#656565]" strokeWidth={1.5} />
      </button>
    </div>
  )
}
