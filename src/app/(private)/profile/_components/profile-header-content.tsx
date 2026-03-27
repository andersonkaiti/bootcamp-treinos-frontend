import { getUserTrainData } from '@http/api-client-generated'

import { ProfileHeader } from './profile-header'

export async function ProfileHeaderContent() {
  const trainData = await getUserTrainData()
  const name = trainData?.userName || 'Usuário'

  return <ProfileHeader name={name} plan="Plano Básico" />
}
