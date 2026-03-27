import { Skeleton } from '@components/ui/skeleton'

export function StreakBannerSkeleton() {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-indigo-50 p-5">
      <Skeleton className="h-6 w-32" />
      <div className="flex items-end justify-between">
        <Skeleton className="h-12 w-16" />
        <Skeleton className="h-8 w-32" />
      </div>
    </div>
  )
}
