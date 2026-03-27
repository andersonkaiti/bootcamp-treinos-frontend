import { getHomeData } from '@http/api-client-generated'
import dayjs from 'dayjs'
import { cookies } from 'next/headers'

import { ChatbotButton } from './chatbot-button'
import { NavItem } from './nav-item'

export async function BottomNavbar() {
  await cookies()
  const date = dayjs().format('YYYY-MM-DD')
  const data = await getHomeData(date)

  const workoutPlanHref = data.activeWorkoutPlanId
    ? `/workout-plans/${data.activeWorkoutPlanId}`
    : '#'

  const navItems = [
    { icon: 'House', href: '/', label: 'Home' },
    { icon: 'Calendar', href: workoutPlanHref, label: 'Calendário' },
    { icon: 'ChartNoAxesColumn', href: '/stats', label: 'Estatísticas' },
    { icon: 'User', href: '/profile', label: 'Perfil' },
  ] as const

  return (
    <nav className="fixed right-6 bottom-6 left-6 z-50 flex items-center justify-between gap-2 rounded-2xl border border-white/20 bg-white/80 p-2 shadow-2xl backdrop-blur-lg">
      <div className="flex flex-1 items-center justify-around">
        {navItems.slice(0, 2).map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </div>

      <ChatbotButton />

      <div className="flex flex-1 items-center justify-around">
        {navItems.slice(2).map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </div>
    </nav>
  )
}
