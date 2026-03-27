import { withAuth } from '@components/with-auth'
import { withOnboarding } from '@components/with-onboarding'
import { Suspense } from 'react'

import { PageHeader } from '../_components/page-header'
import { ConsistencyHeatmapContent } from './_components/consistency-heatmap-content'
import { ConsistencyHeatmapSkeleton } from './_components/consistency-heatmap-skeleton'
import { StatsCardsSkeleton } from './_components/stats-card-skeleton'
import { StatsCardsContent } from './_components/stats-cards-content'
import { StreakBannerContent } from './_components/streak-banner-content'
import { StreakBannerSkeleton } from './_components/streak-banner-skeleton'

async function EvolucaoPage() {
  return (
    <>
      <PageHeader title="Estatísticas" />

      <div className="flex flex-col gap-6 px-5 pb-10">
        <Suspense fallback={<StreakBannerSkeleton />}>
          <StreakBannerContent />
        </Suspense>

        <Suspense fallback={<ConsistencyHeatmapSkeleton />}>
          <ConsistencyHeatmapContent />
        </Suspense>

        <Suspense fallback={<StatsCardsSkeleton />}>
          <StatsCardsContent />
        </Suspense>
      </div>
    </>
  )
}

export default withAuth(withOnboarding(EvolucaoPage))
