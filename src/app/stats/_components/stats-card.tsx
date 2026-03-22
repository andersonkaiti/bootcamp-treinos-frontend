import { CircleCheckBig, Hourglass, TimerOff } from 'lucide-react'

interface StatsCardsProps {
  completedWorkoutsCount: number
  conclusionRate: number
  totalTimeInSeconds: number
}

function formatTotalTime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  return `${hours}h${String(minutes).padStart(2, '0')}m`
}

export function StatsCards({
  completedWorkoutsCount,
  conclusionRate,
  totalTimeInSeconds,
}: StatsCardsProps) {
  const conclusionRatePct = Math.round(conclusionRate * 100)
  const totalTimeFormatted = formatTotalTime(totalTimeInSeconds)

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-row gap-3">
        <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl bg-indigo-50 px-4 py-5">
          <div className="bg-primary/10 flex items-center justify-center rounded-full p-3">
            <CircleCheckBig className="text-primary size-6" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[32px] leading-none font-semibold text-black">
              {completedWorkoutsCount}
            </span>
            <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[13px] leading-[140%] font-normal text-gray-500">
              Treinos Feitos
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl bg-indigo-50 px-4 py-5">
          <div className="bg-primary/10 flex items-center justify-center rounded-full p-3">
            <TimerOff className="text-primary size-6" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[32px] leading-none font-semibold text-black">
              {conclusionRatePct}%
            </span>
            <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[13px] leading-[140%] font-normal text-gray-500">
              Taxa de conclusão
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-indigo-50 px-4 py-6">
        <div className="bg-primary/10 flex items-center justify-center rounded-full p-3">
          <Hourglass className="text-primary size-6" strokeWidth={1.5} />
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[40px] leading-none font-semibold text-black">
            {totalTimeFormatted}
          </span>
          <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[13px] leading-[140%] font-normal text-gray-500">
            Tempo Total
          </span>
        </div>
      </div>
    </div>
  )
}
