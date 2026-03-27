import { getStats } from '@http/api-client-generated'

import { formatDate } from './format-date'
import { StreakBanner } from './streak-banner'

export async function StreakBannerContent() {
  const today = new Date()

  const startDay = new Date(today)
  startDay.setFullYear(today.getFullYear() - 1)

  const dow = startDay.getDay()
  if (dow !== 0) {
    startDay.setDate(startDay.getDate() - dow)
  }

  const stats = await getStats({
    from: formatDate(startDay),
    to: formatDate(today),
  })

  return <StreakBanner workoutStreak={stats.workoutStreak} />
}
