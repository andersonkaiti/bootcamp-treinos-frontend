import { Skeleton } from '@components/ui/skeleton'

export function ConsistencyHeatmapSkeleton() {
  return (
    <section className="flex flex-col gap-3">
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-48 w-full rounded-xl" />
    </section>
  )
}
