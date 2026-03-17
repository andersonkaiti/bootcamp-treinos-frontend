'use client'

import { cn } from '@lib/utils'
import {
  Calendar,
  ChartNoAxesColumn,
  House,
  Sparkles,
  User,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BottomNavbarProps {
  todayWorkoutHref?: string
}

export function BottomNavbar({ todayWorkoutHref }: BottomNavbarProps) {
  const pathname = usePathname()

  const navItems = [
    { icon: House, href: '/', label: 'Home' },
    { icon: Calendar, href: todayWorkoutHref || '#', label: 'Calendário' },
    { icon: Sparkles, href: '#', label: 'IA', isMain: true },
    { icon: ChartNoAxesColumn, href: '#', label: 'Estatísticas' },
    { icon: User, href: '#', label: 'Perfil' },
  ]

  const isWorkoutDayPage =
    pathname.includes('/workout-plans/') && pathname.includes('/day/')

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 flex items-center justify-center gap-4 rounded-t-[20px] border-t border-gray-200 bg-white px-6 py-4">
      {navItems.map((item) => {
        const isActive =
          item.href === '/'
            ? pathname === '/'
            : item.label === 'Calendário'
              ? isWorkoutDayPage
              : pathname === item.href
        const Icon = item.icon

        if (item.isMain) {
          return (
            <button
              key={item.label}
              className="bg-primary flex size-14 items-center justify-center rounded-full"
            >
              <Icon className="size-6 text-white" strokeWidth={2} />
            </button>
          )
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className="flex size-12 items-center justify-center"
          >
            <Icon
              className={cn(
                'size-6',
                isActive ? 'text-black' : 'text-gray-400'
              )}
              strokeWidth={2}
            />
          </Link>
        )
      })}
    </nav>
  )
}
