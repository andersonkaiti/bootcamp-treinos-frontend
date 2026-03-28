import { Skeleton } from '@components/ui/skeleton'

export function StreakBannerSkeleton() {
  return (
    <div className="relative flex min-h-[210px] w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-xl px-5 py-10">
      <Skeleton className="absolute inset-0" />
      <Skeleton className="relative size-14 rounded-full" />
      <div className="relative flex flex-col items-center gap-1">
        <Skeleton className="h-16 w-32" />
        <Skeleton className="h-5 w-32" />
      </div>
    </div>
  )
}
