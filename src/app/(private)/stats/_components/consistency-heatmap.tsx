'use client'

import { cn } from '@lib/cn'

import { useConsistencyHeatmap } from './use-consistency-heatmap'

interface ConsistencyByDay {
  [date: string]: {
    workoutDayCompleted: boolean
    workoutDayStarted: boolean
  }
}

interface ConsistencyHeatmapProps {
  consistencyByDay: ConsistencyByDay
}

export function ConsistencyHeatmap({
  consistencyByDay,
}: ConsistencyHeatmapProps) {
  const { months, getStyle } = useConsistencyHeatmap(consistencyByDay)

  return (
    <div className="w-full rounded-xl border border-white p-5">
      <div className="items-flex-start flex w-full flex-row gap-[4px] overflow-x-auto">
        {months.map((month) => (
          <div
            key={`${month.label}-${month.year}`}
            className="flex shrink-0 flex-col gap-1.5"
            style={{
              flexGrow: month.weeks.length,
              flexBasis: `${month.weeks.length * 20}px`,
            }}
          >
            <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[12px] leading-[140%] font-normal text-gray-400">
              {month.label}
            </span>

            <div className="flex h-full w-full flex-row gap-[4px]">
              {month.weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-1 flex-col gap-[4px]">
                  {week.map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={cn(
                        'aspect-square w-full max-w-[40px] min-w-[16px] rounded-[4px] sm:rounded-[6px]',
                        getStyle(day)
                      )}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
