import { WorkoutDayCard } from '@components/workout-day-card'
import type { GetHomeData200TodayWorkoutDay } from '@http/api-client-generated'
import Link from 'next/link'

interface TodayWorkoutSectionProps {
  todayWorkoutDay: GetHomeData200TodayWorkoutDay
}

export function TodayWorkoutSection({
  todayWorkoutDay,
}: TodayWorkoutSectionProps) {
  return (
    <section className="flex h-full grow flex-col gap-3 px-5 pt-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-black">
          Treino de Hoje
        </h2>
        <button className="font-display text-primary text-xs">
          Ver treinos
        </button>
      </div>

      {todayWorkoutDay ? (
        <Link
          href={`/workout-plans/${todayWorkoutDay.workoutPlanId}/day/${todayWorkoutDay.id}`}
          className="flex size-full grow"
        >
          <WorkoutDayCard workout={todayWorkoutDay} />
        </Link>
      ) : (
        <div className="flex h-50 items-center justify-center rounded-xl border border-gray-200">
          <p className="font-display text-sm text-gray-500">
            Nenhum treino programado para hoje
          </p>
        </div>
      )}
    </section>
  )
}
