import 'dayjs/locale/pt-br'

import type { GetHomeData200TodayWorkoutDay } from '@http/api-client-generated'
import dayjs from 'dayjs'
import { Calendar, Clock, Dumbbell } from 'lucide-react'
import Image from 'next/image'

dayjs.locale('pt-br')

interface WorkoutDayCardProps {
  workout: NonNullable<GetHomeData200TodayWorkoutDay>
}

export function WorkoutDayCard({ workout }: WorkoutDayCardProps) {
  return (
    <div className="relative w-full flex-1 overflow-hidden rounded-xl">
      <Image
        src={workout.coverImageUrl || '/images/workout-placeholder.jpg'}
        alt={workout.name}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <div className="flex items-center gap-1.5 self-start rounded-full bg-white/16 px-2.5 py-1.5 backdrop-blur-sm">
          <Calendar className="size-3.5 text-white" strokeWidth={1.75} />
          <span className="font-display text-xs font-semibold text-white uppercase">
            {workout.weekDay}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-display text-2xl font-semibold text-white">
            {workout.name}
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Clock className="size-3.5 text-white/70" strokeWidth={1.75} />
              <span className="font-display text-xs text-white/70">
                {Math.floor(workout.estimatedDurationInSeconds / 60)}min
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Dumbbell className="size-3.5 text-white/70" strokeWidth={1.75} />
              <span className="font-display text-xs text-white/70">
                {workout.exercisesCount} exercícios
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
