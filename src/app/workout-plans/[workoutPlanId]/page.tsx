import { BottomNavbar } from '@components/bottom-navbar'
import { withAuth } from '@components/with-auth'
import { WorkoutDayCard } from '@components/workout-day-card'
import { getWorkoutPlan } from '@http/api-client-generated'
import { Goal } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { RestDayCard } from './_components/rest-day-card'

interface WorkoutPlanPageProps {
  params: Promise<{ workoutPlanId: string }>
}

async function WorkoutPlanPage({ params }: WorkoutPlanPageProps) {
  const { workoutPlanId } = await params
  const workoutPlan = await getWorkoutPlan(workoutPlanId)

  return (
    <main className="flex min-h-screen flex-col bg-white pb-24">
      <div className="relative h-[296px] w-full overflow-hidden rounded-b-[20px]">
        <Image
          src="/images/workout-plan-banner.png"
          alt={workoutPlan.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-between p-5 pb-10">
          <Image
            src="/icons/fit-ai-logo.svg"
            alt="Logo"
            width={60}
            height={60}
          />

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1 self-start rounded-full bg-[#2B54FF] px-2.5 py-1.5">
              <Goal className="h-4 w-4 text-white" strokeWidth={1.5} />
              <span className="font-display text-xs font-semibold text-white uppercase">
                {workoutPlan.name}
              </span>
            </div>

            <h1 className="font-display text-2xl font-semibold text-white">
              Plano de Treino
            </h1>
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-3 p-5">
        {workoutPlan.workoutDays.map((day) => {
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

      <BottomNavbar />
    </main>
  )
}

export default withAuth(WorkoutPlanPage)
