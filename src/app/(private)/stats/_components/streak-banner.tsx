import { cn } from '@lib/cn'
import { Flame } from 'lucide-react'
import Image from 'next/image'

interface StreakBannerProps {
  workoutStreak: number
}

export function StreakBanner({ workoutStreak }: StreakBannerProps) {
  const hasStreak = workoutStreak > 0

  return (
    <div
      className={cn(
        'relative flex min-h-[210px] w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-xl px-5 py-10',
        !hasStreak && 'grayscale'
      )}
    >
      <Image
        src="/images/stats-banner.png"
        alt="Stats Banner"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/12 bg-white/12 backdrop-blur-xs">
        <Flame
          className={cn(
            'size-8',
            hasStreak
              ? 'fill-orange-500 text-orange-500'
              : 'fill-white text-white'
          )}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-1">
        <span className="text-center font-[family-name:var(--font-inter-tight),sans-serif] text-[48px] leading-[95%] font-semibold text-white">
          {workoutStreak} {workoutStreak === 1 ? 'dia' : 'dias'}
        </span>
        <span className="text-center font-[family-name:var(--font-inter-tight),sans-serif] text-[16px] leading-[115%] font-normal text-white/60">
          Sequência Atual
        </span>
      </div>
    </div>
  )
}
