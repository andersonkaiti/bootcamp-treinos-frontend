import { getStats } from '@http/api-client-generated'

import { formatDate } from './format-date'
import { StatsCards } from './stats-card'

export async function StatsCardsContent() {
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

  return (
    <StatsCards
      completedWorkoutsCount={stats.completedWorkoutsCount}
      conclusionRate={stats.conclusionRate}
      totalTimeInSeconds={stats.totalTimeInSeconds}
    />
  )
}
