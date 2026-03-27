import { PageHeader } from '../_components/page-header'
import { ConsistencyHeatmapSkeleton } from './_components/consistency-heatmap-skeleton'
import { StatsCardsSkeleton } from './_components/stats-card-skeleton'
import { StreakBannerSkeleton } from './_components/streak-banner-skeleton'

export default function Loading() {
  return (
    <>
      <PageHeader title="Estatísticas" />

      <div className="flex flex-col gap-6 px-5 pb-10">
        <StreakBannerSkeleton />

        <ConsistencyHeatmapSkeleton />

        <StatsCardsSkeleton />
      </div>
    </>
  )
}
