import { BottomNavbar } from '@components/bottom-navbar'
import { WorkoutDayCard } from '@components/workout-day-card'
import { getWorkoutDay } from '@http/api-client-generated'

import { ExerciseList } from './_components/exercise-list'
import { WorkoutActions } from './_components/workout-actions'
import { WorkoutDayHeader } from './_components/workout-day-header'
import { completeWorkoutAction, startWorkoutAction } from './actions'

interface WorkoutDayPageProps {
  params: Promise<{
    workoutPlanId: string
    dayId: string
  }>
}

export default async function WorkoutDayPage({ params }: WorkoutDayPageProps) {
  const { workoutPlanId, dayId } = await params
  const workoutDay = await getWorkoutDay(workoutPlanId, dayId)

  const activeSession = workoutDay.sessions.find(
    (session) => session.startedAt != null && session.completedAt == null
  )
  const completedSession = workoutDay.sessions.find(
    (session) => session.completedAt != null
  )

  let sessionStatus: 'none' | 'in_progress' | 'completed' = 'none'
  if (completedSession) {
    sessionStatus = 'completed'
  } else if (activeSession) {
    sessionStatus = 'in_progress'
  }

  const handleStartWorkout = startWorkoutAction.bind(null, workoutPlanId, dayId)
  const handleCompleteWorkout = completeWorkoutAction.bind(
    null,
    workoutPlanId,
    dayId,
    activeSession?.id
  )

  return (
    <main className="flex min-h-screen flex-col bg-white pt-5 pb-24">
      <WorkoutDayHeader />

      <section className="flex flex-1 flex-col gap-5 p-5">
        <WorkoutDayCard workout={workoutDay} />

        <ExerciseList exercises={workoutDay.exercises} />

        <WorkoutActions
          sessionStatus={sessionStatus}
          onStartWorkout={handleStartWorkout}
          onCompleteWorkout={handleCompleteWorkout}
        />
      </section>

      <BottomNavbar />
    </main>
  )
}
