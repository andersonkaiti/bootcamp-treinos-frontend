import { PageHeader } from '../_components/page-header'
import { BodyStatsGridSkeleton } from './_components/body-stats-grid-skeleton'
import { ProfileHeaderSkeleton } from './_components/profile-header-skeleton'

export default function Loading() {
  return (
    <>
      <PageHeader title="Perfil" />

      <div className="flex flex-col items-center gap-6 p-5 pb-10">
        <ProfileHeaderSkeleton />

        <BodyStatsGridSkeleton />
      </div>
    </>
  )
}
