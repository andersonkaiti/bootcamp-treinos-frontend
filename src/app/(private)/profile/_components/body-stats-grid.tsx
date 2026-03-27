import type { GetUserTrainData200 } from '@http/api-client-generated'
import type { LucideIcon } from 'lucide-react'
import { BicepsFlexed, Ruler, User, Weight } from 'lucide-react'

interface StatCardProps {
  icon: LucideIcon
  value: string
  label: string
}

function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="bg-primary/10 flex flex-col items-center gap-5 rounded-xl p-5">
      <div className="bg-primary/10 flex size-[34px] items-center justify-center rounded-full">
        <Icon className="text-primary size-4" strokeWidth={1.5} />
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[24px] leading-[115%] font-semibold text-black">
          {value}
        </span>
        <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[12px] leading-[140%] font-normal text-gray-500 uppercase">
          {label}
        </span>
      </div>
    </div>
  )
}

interface BodyStatsGridProps {
  trainData: GetUserTrainData200
}

export function BodyStatsGrid({ trainData }: BodyStatsGridProps) {
  const weight = trainData?.weightInGrams
    ? (trainData.weightInGrams / 1000).toFixed(1)
    : '--'
  const height = trainData?.heightInCentimeters
    ? String(trainData.heightInCentimeters)
    : '--'
  const bodyFat = trainData?.bodyFatPercentage
    ? `${trainData.bodyFatPercentage}%`
    : '--'
  const age = trainData?.age ? String(trainData.age) : '--'

  const stats = [
    { icon: Weight, value: weight, label: 'KG' },
    { icon: Ruler, value: height, label: 'CM' },
    { icon: BicepsFlexed, value: bodyFat, label: 'GC' },
    { icon: User, value: age, label: 'ANOS' },
  ]

  return (
    <div className="grid w-full grid-cols-2 gap-3">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  )
}
