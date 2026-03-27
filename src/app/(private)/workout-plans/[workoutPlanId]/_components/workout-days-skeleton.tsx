import { Skeleton } from '@components/ui/skeleton'

export function WorkoutDaysSkeleton() {
  return (
    <section className="flex flex-col gap-3 p-5">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="h-40 w-full rounded-xl" />
      ))}
    </section>
  )
}
