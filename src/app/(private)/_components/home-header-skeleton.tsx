import { Skeleton } from '@components/ui/skeleton'

export function HomeHeaderSkeleton() {
  return (
    <section className="relative h-[296px] w-full overflow-hidden rounded-b-[20px]">
      <Skeleton className="h-full w-full" />

      <div className="absolute inset-0 flex flex-col justify-between p-5 pb-10">
        <Skeleton className="h-[60px] w-[60px] rounded-md" />

        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-4 w-32" />
          </div>

          <Skeleton className="h-8 w-16 rounded-full" />
        </div>
      </div>
    </section>
  )
}
