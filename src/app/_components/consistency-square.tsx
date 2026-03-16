import { cn } from '@lib/utils'

import type { ConsistencyStatus } from './consistency-section'

interface ConsistencySquareProps {
  status: ConsistencyStatus
  dayLabel: string
  isToday?: boolean
}

const statusStyles: Record<ConsistencyStatus, string> = {
  completed: 'bg-primary',
  started: 'bg-gray-200',
  not_started: '',
}

export function ConsistencySquare({
  status,
  dayLabel,
  isToday = false,
}: ConsistencySquareProps) {
  const todayStyle =
    status === 'not_started'
      ? isToday
        ? 'border-[1.6px] border-primary bg-transparent'
        : 'border border-gray-200 bg-transparent'
      : ''

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={cn('size-5 rounded-sm', statusStyles[status], todayStyle)}
      />
      <span className="font-display text-xs text-gray-500">{dayLabel}</span>
    </div>
  )
}
