import { Skeleton } from '@components/ui/skeleton'

export function TodayWorkoutSectionSkeleton() {
  return (
    <section className="flex h-full grow flex-col gap-3 px-5 pt-5 pb-20">
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-4 w-24" />
      </div>

      <Skeleton className="h-40 w-full rounded-xl" />
    </section>
  )
}
