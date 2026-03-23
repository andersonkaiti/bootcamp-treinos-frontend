'use client'

import { cn } from '@lib/cn'
import { Calendar, ChartNoAxesColumn, House, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const icons = { House, Calendar, ChartNoAxesColumn, User }

export type NavIconName = keyof typeof icons

interface NavItemProps {
  icon: NavIconName
  href: string
  label: string
}

export function NavItem({ icon, href, label }: NavItemProps) {
  const pathname = usePathname()
  const Icon = icons[icon]

  const isWorkoutPlanPage = pathname.includes('/workout-plans/')

  const isActive =
    href === '/'
      ? pathname === '/'
      : label === 'Calendário'
        ? isWorkoutPlanPage
        : pathname === href

  return (
    <Link href={href} className="flex size-12 items-center justify-center">
      <Icon
        className={cn('size-6', isActive ? 'text-black' : 'text-gray-400')}
        strokeWidth={2}
      />
    </Link>
  )
}
