import { getHomeData, getUserTrainData } from '@http/api-client-generated'
import dayjs from 'dayjs'

export async function checkOnboardingStatus() {
  const date = dayjs().format('YYYY-MM-DD')

  try {
    const [homeData, userData] = await Promise.all([
      getHomeData(date).catch(() => null),
      getUserTrainData().catch(() => null),
    ])

    const hasTrainData = !!userData
    const hasActivePlan = !!homeData?.activeWorkoutPlanId

    return hasTrainData && hasActivePlan
  } catch {
    return false
  }
}
