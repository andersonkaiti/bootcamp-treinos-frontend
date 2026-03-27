import { withOnboarding } from '@components/with-onboarding'
import { Suspense } from 'react'

import { ConsistencySectionContent } from './_components/consistency-section-content'
import { ConsistencySectionSkeleton } from './_components/consistency-section-skeleton'
import { HomeHeaderContent } from './_components/home-header-content'
import { HomeHeaderSkeleton } from './_components/home-header-skeleton'
import { TodayWorkoutSectionContent } from './_components/today-workout-section-content'
import { TodayWorkoutSectionSkeleton } from './_components/today-workout-section-skeleton'

async function Home() {
  return (
    <>
      <Suspense fallback={<HomeHeaderSkeleton />}>
        <HomeHeaderContent />
      </Suspense>

      <div className="flex flex-col gap-6">
        <Suspense fallback={<ConsistencySectionSkeleton />}>
          <ConsistencySectionContent />
        </Suspense>

        <Suspense fallback={<TodayWorkoutSectionSkeleton />}>
          <TodayWorkoutSectionContent />
        </Suspense>
      </div>
    </>
  )
}

export default withOnboarding(Home)
