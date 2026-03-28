import { Calendar, Zap } from 'lucide-react'

interface RestDayCardProps {
  dayOfWeek: string
}

const DAY_TRANSLATIONS: Record<string, string> = {
  MONDAY: 'Segunda',
  TUESDAY: 'Terça',
  WEDNESDAY: 'Quarta',
  THURSDAY: 'Quinta',
  FRIDAY: 'Sexta',
  SATURDAY: 'Sábado',
  SUNDAY: 'Domingo',
}

export function RestDayCard({ dayOfWeek }: RestDayCardProps) {
  const dayLabel = DAY_TRANSLATIONS[dayOfWeek] || dayOfWeek
  return (
    <div className="flex h-[110px] w-full flex-col justify-between rounded-xl bg-gray-200 p-5">
      <div className="flex items-center gap-1.5 self-start rounded-full bg-black/8 px-2.5 py-1.5 backdrop-blur-sm">
        <Calendar className="size-3.5 text-black" strokeWidth={1.75} />
        <span className="font-display text-xs font-semibold text-black uppercase">
          {dayLabel}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Zap className="fill-primary text-primary size-5" />
        <span className="font-display text-2xl font-semibold text-black">
          Descanso
        </span>
      </div>
    </div>
  )
}
