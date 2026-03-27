import { withAuth } from '@components/with-auth'
import { Suspense } from 'react'

import { WorkoutDaysList } from './_components/workout-days-list'
import { WorkoutDaysSkeleton } from './_components/workout-days-skeleton'
import { WorkoutPlanBanner } from './_components/workout-plan-banner'
import { WorkoutPlanBannerSkeleton } from './_components/workout-plan-banner-skeleton'

interface WorkoutPlanPageProps {
  params: Promise<{ workoutPlanId: string }>
}

async function WorkoutPlanPage({ params }: WorkoutPlanPageProps) {
  const { workoutPlanId } = await params

  return (
    <>
      <Suspense fallback={<WorkoutPlanBannerSkeleton />}>
        <WorkoutPlanBanner workoutPlanId={workoutPlanId} />
      </Suspense>

      <Suspense fallback={<WorkoutDaysSkeleton />}>
        <WorkoutDaysList workoutPlanId={workoutPlanId} />
      </Suspense>
    </>
  )
}

export default withAuth(WorkoutPlanPage)
