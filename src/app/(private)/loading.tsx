import { ConsistencySectionSkeleton } from './_components/consistency-section-skeleton'
import { HomeHeaderSkeleton } from './_components/home-header-skeleton'
import { TodayWorkoutSectionSkeleton } from './_components/today-workout-section-skeleton'

export default function Loading() {
  return (
    <>
      <HomeHeaderSkeleton />

      <div className="flex flex-col gap-6">
        <ConsistencySectionSkeleton />

        <TodayWorkoutSectionSkeleton />
      </div>
    </>
  )
}
