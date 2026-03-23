import { BottomNavbar } from '@components/bottom-navbar'
import { withAuth } from '@components/with-auth'
import { getUserTrainData } from '@http/api-client-generated'
import Image from 'next/image'

import { BodyStatsGrid } from './_components/body-stats-grid'
import { ProfileHeader } from './_components/profile-header'
import { SignOutButton } from './_components/sign-out-button'

async function PerfilPage() {
  const trainData = await getUserTrainData()

  const name = trainData?.userName || 'Usuário'

  return (
    <main className="relative mx-auto flex min-h-screen w-full flex-col bg-white">
      <header className="flex h-14 items-center px-5">
        <Image
          src="/icons/fit-ai-logo.svg"
          alt="Logo"
          width={60}
          height={60}
          className="invert"
        />
      </header>

      <div className="flex flex-col items-center gap-5 p-5 pb-28">
        <ProfileHeader name={name} plan="Plano Básico" />

        <BodyStatsGrid trainData={trainData} />

        <SignOutButton />
      </div>

      <BottomNavbar />
    </main>
  )
}

export default withAuth(PerfilPage)
