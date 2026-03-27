import { Skeleton } from '@components/ui/skeleton'

export function ProfileHeaderSkeleton() {
  return (
    <div className="flex w-full flex-row items-center justify-between gap-3">
      <div className="flex flex-row items-center gap-3">
        <Skeleton className="h-[52px] w-[52px] rounded-full" />

        <div className="flex flex-col items-start gap-1.5">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </div>
  )
}
