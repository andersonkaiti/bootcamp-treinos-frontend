import { Skeleton } from '@components/ui/skeleton'

export function StatsCardsSkeleton() {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-row gap-3">
        <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl bg-indigo-50 px-4 py-5">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-4 w-24" />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl bg-indigo-50 px-4 py-5">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-indigo-50 px-4 py-6">
        <Skeleton className="h-12 w-12 rounded-full" />
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  )
}
