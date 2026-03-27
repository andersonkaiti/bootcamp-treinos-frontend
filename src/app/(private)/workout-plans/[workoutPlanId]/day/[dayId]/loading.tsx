import { Skeleton } from '@components/ui/skeleton'

import { WorkoutDayHeader } from './_components/workout-day-header'

export default function Loading() {
  return (
    <>
      <WorkoutDayHeader />

      <section className="flex flex-1 flex-col gap-5 p-5">
        {/* WorkoutDayCard Skeleton */}
        <Skeleton className="h-32 w-full rounded-xl" />

        {/* ExerciseList Skeleton */}
        <div className="flex flex-col gap-4">
          <Skeleton className="h-24 w-full rounded-xl" />
          <Skeleton className="h-24 w-full rounded-xl" />
          <Skeleton className="h-24 w-full rounded-xl" />
        </div>

        {/* WorkoutActions Skeleton */}
        <div className="mt-auto pt-4">
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
      </section>
    </>
  )
}
