import 'dayjs/locale/pt-br'

import type {
  GetHomeData200TodayWorkoutDay,
  GetWorkoutDay200,
} from '@http/api-client-generated'
import dayjs from 'dayjs'
import { Calendar, Clock, Dumbbell, Moon } from 'lucide-react'
import Image from 'next/image'

dayjs.locale('pt-br')

interface WorkoutDayCardProps {
  workout: NonNullable<GetHomeData200TodayWorkoutDay | GetWorkoutDay200>
}

const DAY_TRANSLATIONS: Record<string, string> = {
  MONDAY: 'Segunda',
  TUESDAY: 'Terça',
  WEDNESDAY: 'Quarta',
  THURSDAY: 'Quinta',
  FRIDAY: 'Sexta',
  SATURDAY: 'Sábado',
  SUNDAY: 'Domingo',
}

export function WorkoutDayCard({ workout }: WorkoutDayCardProps) {
  const dayLabel = DAY_TRANSLATIONS[workout.weekDay] || workout.weekDay

  if (workout.isRest) {
    return (
      <div className="relative h-50 w-full shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-slate-500 via-slate-600 to-slate-700 sm:h-80">
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <Moon className="size-16 text-white/40" strokeWidth={1.5} />
          <div className="text-center">
            <h3 className="font-display text-3xl font-semibold text-white">
              Descanso
            </h3>
            <p className="mt-1 text-sm text-white/60">
              Recupere-se para o próximo treino
            </p>
          </div>
        </div>

        <div className="absolute top-0 left-0 m-5 flex items-center gap-1.5 rounded-full bg-white/16 px-2.5 py-1.5 backdrop-blur-sm">
          <Calendar className="size-3.5 text-white" strokeWidth={1.75} />
          <span className="font-display text-xs font-semibold text-white uppercase">
            {dayLabel}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-50 w-full shrink-0 overflow-hidden rounded-xl sm:h-80">
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
            {dayLabel}
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
