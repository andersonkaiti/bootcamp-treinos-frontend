'use client'

import dayjs from 'dayjs'
import { Flame } from 'lucide-react'

import { ConsistencySquare } from './consistency-square'

export type ConsistencyStatus = 'completed' | 'started' | 'not_started'

interface ConsistencySectionProps {
  consistencyByDay: Record<
    string,
    { workoutDayCompleted?: boolean; workoutDayStarted?: boolean }
  >
  workoutStreak: number
}

export function ConsistencySection({
  consistencyByDay,
  workoutStreak,
}: ConsistencySectionProps) {
  const daysToShow = Math.max(workoutStreak, 7)
  const daysArray = Array.from({ length: daysToShow }, (_, i) => {
    const dayOffset = daysToShow - 1 - i
    return dayjs().subtract(dayOffset, 'day').format('YYYY-MM-DD')
  })

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
          {daysArray.map((dateKey) => {
            const dayData = consistencyByDay[dateKey]
            const status: ConsistencyStatus = dayData?.workoutDayCompleted
              ? 'completed'
              : dayData?.workoutDayStarted
                ? 'started'
                : 'not_started'
            const isToday = dateKey === dayjs().format('YYYY-MM-DD')

            return (
              <ConsistencySquare
                key={dateKey}
                status={status}
                dayLabel={dayjs(dateKey).format('ddd')[0].toUpperCase()}
                isToday={isToday}
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
