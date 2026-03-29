import { getUserTrainData } from '@http/api-client-generated'

import { UserInfoCard } from './user-info-card'

export async function UserInfoCardContent() {
  const trainData = await getUserTrainData()

  return <UserInfoCard trainData={trainData} />
}
