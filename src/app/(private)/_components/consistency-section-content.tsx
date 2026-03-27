import { getHomeData } from '@http/api-client-generated'
import dayjs from 'dayjs'

import { ConsistencySection } from './consistency-section'

function getTodayIndex(): number {
  const day = new Date().getDay()

  return day === 0 ? 6 : day - 1
}

export async function ConsistencySectionContent() {
  const date = dayjs().format('YYYY-MM-DD')
  const data = await getHomeData(date)
  const todayIndex = getTodayIndex()

  return (
    <ConsistencySection
      consistencyByDay={data.consistencyByDay}
      workoutStreak={data.workoutStreak}
      todayIndex={todayIndex}
    />
  )
}
