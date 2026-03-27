import { getStats } from '@http/api-client-generated'

import { ConsistencyHeatmap } from './consistency-heatmap'
import { formatDate } from './format-date'

export async function ConsistencyHeatmapContent() {
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
    <section className="flex flex-col gap-3">
      <h2 className="font-display text-lg font-semibold text-black">
        Consistência
      </h2>

      <ConsistencyHeatmap consistencyByDay={stats.consistencyByDay} />
    </section>
  )
}
