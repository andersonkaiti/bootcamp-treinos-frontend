import { withAuth } from '@components/with-auth'
import { withOnboarding } from '@components/with-onboarding'
import { Suspense } from 'react'

import { PageHeader } from '../_components/page-header'
import { BodyStatsGridContent } from './_components/body-stats-grid-content'
import { BodyStatsGridSkeleton } from './_components/body-stats-grid-skeleton'
import { ProfileHeaderContent } from './_components/profile-header-content'
import { ProfileHeaderSkeleton } from './_components/profile-header-skeleton'
import { SignOutButton } from './_components/sign-out-button'
import { UserInfoCardContent } from './_components/user-info-card-content'

async function PerfilPage() {
  return (
    <>
      <PageHeader title="Perfil" />

      <div className="flex flex-col items-center gap-6 p-5 pb-10">
        <Suspense fallback={<ProfileHeaderSkeleton />}>
          <ProfileHeaderContent />
        </Suspense>

        <Suspense fallback={<BodyStatsGridSkeleton />}>
          <BodyStatsGridContent />
        </Suspense>

        <Suspense>
          <UserInfoCardContent />
        </Suspense>

        <SignOutButton />
      </div>
    </>
  )
}

export default withAuth(withOnboarding(PerfilPage))
