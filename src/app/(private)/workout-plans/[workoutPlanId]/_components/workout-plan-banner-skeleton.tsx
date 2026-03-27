import { Skeleton } from '@components/ui/skeleton'

export function WorkoutPlanBannerSkeleton() {
  return (
    <div className="relative h-[296px] w-full overflow-hidden rounded-b-[20px]">
      <Skeleton className="h-full w-full" />

      <div className="absolute inset-0 flex flex-col justify-between p-5 pb-10">
        <Skeleton className="h-[60px] w-[60px] rounded-md" />

        <div className="flex flex-col gap-3">
          <Skeleton className="h-8 w-40 rounded-full" />
          <Skeleton className="h-8 w-48" />
        </div>
      </div>
    </div>
  )
}
