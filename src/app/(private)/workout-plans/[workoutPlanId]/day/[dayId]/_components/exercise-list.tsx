import type { ComponentProps } from 'react'

import { ExerciseCard } from './exercise-card'

interface ExerciseListProps {
  exercises: Array<ComponentProps<typeof ExerciseCard>['exercise']>
}

export function ExerciseList({ exercises }: ExerciseListProps) {
  return (
    <div className="flex flex-col gap-3">
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  )
}
