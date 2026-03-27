import { getHomeData } from '@http/api-client-generated'
import dayjs from 'dayjs'

import { TodayWorkoutSection } from './today-workout-section'

export async function TodayWorkoutSectionContent() {
  const date = dayjs().format('YYYY-MM-DD')
  const data = await getHomeData(date)

  return <TodayWorkoutSection todayWorkoutDay={data.todayWorkoutDay} />
}
