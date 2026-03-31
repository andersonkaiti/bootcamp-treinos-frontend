import { WorkoutDayCard } from '@components/workout-day-card'
import { getWorkoutPlan } from '@http/api-client-generated'
import { sortByWeekDay } from '@lib/week-day-utils'
import Link from 'next/link'

import { RestDayCard } from './rest-day-card'

export async function WorkoutDaysList({
  workoutPlanId,
}: {
  workoutPlanId: string
}) {
  const workoutPlan = await getWorkoutPlan(workoutPlanId)
  const sortedDays = sortByWeekDay(workoutPlan.workoutDays)

  return (
    <section className="flex flex-col gap-3 p-5">
      {sortedDays.map((day) => {
        if (day.isRest) {
          return <RestDayCard key={day.id} dayOfWeek={day.weekDay} />
        }

        return (
          <Link
            key={day.id}
            href={`/workout-plans/${workoutPlanId}/day/${day.id}`}
          >
            <WorkoutDayCard workout={{ ...day, workoutPlanId }} />
          </Link>
        )
      })}
    </section>
  )
}
