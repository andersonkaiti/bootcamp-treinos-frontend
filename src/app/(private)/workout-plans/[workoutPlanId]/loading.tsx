import { WorkoutDaysSkeleton } from './_components/workout-days-skeleton'
import { WorkoutPlanBannerSkeleton } from './_components/workout-plan-banner-skeleton'

export default function Loading() {
  return (
    <>
      <WorkoutPlanBannerSkeleton />

      <WorkoutDaysSkeleton />
    </>
  )
}
