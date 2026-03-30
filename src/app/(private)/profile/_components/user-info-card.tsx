import type { GetUserTrainData200 } from '@http/api-client-generated'
import { AlertCircle, Target } from 'lucide-react'

const DAY_TRANSLATION: Record<string, string> = {
  MONDAY: 'segunda-feira',
  TUESDAY: 'terça-feira',
  WEDNESDAY: 'quarta-feira',
  THURSDAY: 'quinta-feira',
  FRIDAY: 'sexta-feira',
  SATURDAY: 'sábado',
  SUNDAY: 'domingo',
}

function translateDays(days: string[]): string {
  return days.map((day) => DAY_TRANSLATION[day] || day).join(', ')
}

function capitalize(text: string): string {
  if (!text) return text
  return text.charAt(0).toUpperCase() + text.slice(1)
}

interface UserInfoCardProps {
  trainData: GetUserTrainData200
}

export function UserInfoCard({ trainData }: UserInfoCardProps) {
  const hasGoal = trainData?.goal
  const hasAvailableDays =
    trainData?.availableDays && trainData.availableDays.length > 0
  const hasLimitations = trainData?.physicalLimitations

  if (!hasGoal && !hasAvailableDays && !hasLimitations) {
    return null
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {hasGoal && (
        <div className="bg-primary/10 flex flex-col gap-3 rounded-xl p-5">
          <div className="flex items-center gap-2">
            <Target className="text-primary size-5" strokeWidth={1.5} />
            <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[14px] leading-[115%] font-semibold text-gray-700 uppercase">
              Objetivo
            </span>
          </div>
          <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[16px] leading-[120%] font-normal text-black">
            {capitalize(trainData?.goal || 'Não informado')}
          </span>
        </div>
      )}

      {hasAvailableDays && (
        <div className="bg-primary/10 flex flex-col gap-3 rounded-xl p-5">
          <div className="flex items-center gap-2">
            <Target className="text-primary size-5" strokeWidth={1.5} />
            <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[14px] leading-[115%] font-semibold text-gray-700 uppercase">
              Dias Disponíveis
            </span>
          </div>
          <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[16px] leading-[120%] font-normal text-black">
            {trainData.availableDays &&
              capitalize(translateDays(trainData.availableDays))}
          </span>
        </div>
      )}

      {hasLimitations && (
        <div className="flex flex-col gap-3 rounded-xl border border-orange-200 bg-orange-50 p-5">
          <div className="flex items-center gap-2">
            <AlertCircle className="size-5 text-orange-600" strokeWidth={1.5} />
            <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[14px] leading-[115%] font-semibold text-gray-700 uppercase">
              Limitações Físicas
            </span>
          </div>
          <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-[16px] leading-[120%] font-normal text-black">
            {capitalize(trainData.physicalLimitations || 'Nenhuma')}
          </span>
        </div>
      )}
    </div>
  )
}
