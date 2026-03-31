import { getHomeData } from '@http/api-client-generated'
import dayjs from 'dayjs'

import { ConsistencySection } from './consistency-section'

export async function ConsistencySectionContent() {
  const date = dayjs().format('YYYY-MM-DD')
  const data = await getHomeData(date)

  return (
    <ConsistencySection
      consistencyByDay={data.consistencyByDay}
      workoutStreak={data.workoutStreak}
    />
  )
}
