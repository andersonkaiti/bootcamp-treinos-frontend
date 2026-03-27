import { Skeleton } from '@components/ui/skeleton'

export function ConsistencySectionSkeleton() {
  return (
    <section className="flex flex-col gap-3 px-5 pt-5">
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-24" />
      </div>

      <div className="flex items-center gap-3">
        <Skeleton className="h-[83px] flex-1 rounded-xl" />
        <Skeleton className="h-[83px] w-20 rounded-xl" />
      </div>
    </section>
  )
}
