import { getUserTrainData } from '@http/api-client-generated'

import { BodyStatsGrid } from './body-stats-grid'

export async function BodyStatsGridContent() {
  const trainData = await getUserTrainData()

  return <BodyStatsGrid trainData={trainData} />
}
