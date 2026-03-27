import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import { Flame } from 'lucide-react'

import { ConsistencySquare } from './consistency-square'

dayjs.extend(isoWeek)

export type ConsistencyStatus = 'completed' | 'started' | 'not_started'

const DAY_LABELS = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D']

interface ConsistencySectionProps {
  consistencyByDay: Record<
    string,
    { workoutDayCompleted?: boolean; workoutDayStarted?: boolean }
  >
  workoutStreak: number
  todayIndex: number
}

export function ConsistencySection({
  consistencyByDay,
  workoutStreak,
  todayIndex,
}: ConsistencySectionProps) {
  return (
    <section className="flex flex-col gap-3 px-5 pt-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-black">
          Consistência
        </h2>
        <button className="font-display text-primary text-xs">
          Ver histórico
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-20.5 flex-1 items-center justify-between rounded-xl border border-gray-200 px-5">
          {DAY_LABELS.map((label, index) => {
            const dateKey = dayjs()
              .isoWeekday(index + 1)
              .format('YYYY-MM-DD')
            const dayData = consistencyByDay[dateKey]
            const status: ConsistencyStatus = dayData?.workoutDayCompleted
              ? 'completed'
              : dayData?.workoutDayStarted
                ? 'started'
                : 'not_started'

            return (
              <ConsistencySquare
                key={dateKey}
                status={status}
                dayLabel={label}
                isToday={index === todayIndex}
              />
            )
          })}
        </div>

        <div className="flex h-[83px] items-center gap-2 rounded-xl bg-[rgba(240,97,0,0.08)] px-5">
          <Flame className="text-destructive size-5" fill="#F06100" />
          <span className="font-display text-base font-semibold text-black">
            {workoutStreak}
          </span>
        </div>
      </div>
    </section>
  )
}
