import { getHomeData } from '@http/api-client-generated'
import dayjs from 'dayjs'
import { Sparkles } from 'lucide-react'

import { NavItem } from './nav-item'

export async function BottomNavbar() {
  const date = dayjs().format('YYYY-MM-DD')
  const data = await getHomeData(date)

  const workoutPlanHref = data.activeWorkoutPlanId
    ? `/workout-plans/${data.activeWorkoutPlanId}`
    : '#'

  const navItems = [
    { icon: 'House', href: '/', label: 'Home' },
    { icon: 'Calendar', href: workoutPlanHref, label: 'Calendário' },
    { icon: 'ChartNoAxesColumn', href: '/stats', label: 'Estatísticas' },
    { icon: 'User', href: '#', label: 'Perfil' },
  ] as const

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 flex items-center justify-center gap-4 rounded-t-[20px] border-t border-gray-200 bg-white px-6 py-4">
      {navItems.slice(0, 2).map((item) => (
        <NavItem key={item.label} {...item} />
      ))}

      <button className="bg-primary flex size-14 items-center justify-center rounded-full">
        <Sparkles className="size-6 text-white" strokeWidth={2} />
      </button>

      {navItems.slice(2).map((item) => (
        <NavItem key={item.label} {...item} />
      ))}
    </nav>
  )
}
