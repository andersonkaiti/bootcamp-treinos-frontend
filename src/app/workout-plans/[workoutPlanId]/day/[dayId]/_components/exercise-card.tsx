import { Zap } from 'lucide-react'

import type { GetWorkoutDay200ExercisesItem } from '@/http/api-client-generated'

import { ExerciseHelpButton } from './exercise-help-button'

interface ExerciseCardProps {
  exercise: GetWorkoutDay200ExercisesItem
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  const restTime = exercise.restTimeInSeconds / 60

  return (
    <div className="flex items-start justify-between rounded-xl border border-gray-200 p-5">
      <div className="flex flex-col gap-3">
        <h3 className="font-display text-base font-semibold text-black">
          {exercise.name}
        </h3>

        <div className="flex items-center gap-1.5">
          <span className="flex items-center justify-center rounded-full bg-gray-200 px-2.5 py-1">
            <span className="font-display text-xs font-semibold text-gray-400 uppercase">
              {exercise.sets} séries
            </span>
          </span>
          <span className="flex items-center justify-center rounded-full bg-gray-200 px-2.5 py-1">
            <span className="font-display text-xs font-semibold text-gray-400 uppercase">
              {exercise.reps} reps
            </span>
          </span>
          <span className="flex items-center gap-1 rounded-full bg-gray-200 px-2.5 py-1">
            <Zap className="h-3.5 w-3.5 text-gray-400" strokeWidth={1.75} />
            <span className="font-display text-xs font-semibold text-gray-400 uppercase">
              {restTime}s
            </span>
          </span>
        </div>
      </div>

      <ExerciseHelpButton
        name={exercise.name}
        sets={exercise.sets}
        reps={exercise.reps}
        restTimeInSeconds={exercise.restTimeInSeconds}
      />
    </div>
  )
}
