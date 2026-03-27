import { Skeleton } from '@components/ui/skeleton'

export function BodyStatsGridSkeleton() {
  return (
    <div className="grid w-full grid-cols-2 gap-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="bg-primary/10 flex flex-col items-center gap-5 rounded-xl p-5"
        >
          <Skeleton className="h-[34px] w-[34px] rounded-full" />
          <div className="flex flex-col items-center gap-1.5">
            <Skeleton className="h-6 w-12" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
      ))}
    </div>
  )
}
