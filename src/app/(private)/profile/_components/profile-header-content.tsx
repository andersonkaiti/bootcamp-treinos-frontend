import { getUserTrainData } from '@http/api-client-generated'
import { authClient } from '@lib/auth-client'
import { headers } from 'next/headers'

import { ProfileHeader } from './profile-header'

export async function ProfileHeaderContent() {
  const trainData = await getUserTrainData()
  const name = trainData?.userName || 'Usuário'

  const { data } = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  })

  const user = data?.user

  return <ProfileHeader name={name} plan="Plano Básico" image={user?.image} />
}
