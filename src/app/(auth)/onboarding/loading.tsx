import { Skeleton } from '@components/ui/skeleton'

export default function Loading() {
  return (
    <main className="mx-auto flex h-dvh w-full max-w-6xl flex-col bg-white pt-4">
      <header className="flex shrink-0 items-center justify-between border-b border-neutral-100 px-5 pb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Skeleton className="size-10 rounded-full" />
            <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-green-500 shadow-sm" />
          </div>
          <div className="flex flex-col gap-1">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>

        <Skeleton className="size-8 rounded-full" />
      </header>

      <div className="flex-1 space-y-4 p-5">
        <div className="flex items-start gap-4">
          <Skeleton className="size-8 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-10 w-64 rounded-2xl rounded-tl-none md:w-80" />
            <Skeleton className="h-20 w-72 rounded-2xl rounded-tl-none md:w-96" />
          </div>
        </div>

        <div className="flex flex-row-reverse items-start gap-4">
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="h-10 w-48 rounded-2xl rounded-tr-none md:w-64" />
        </div>
      </div>
    </main>
  )
}
