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
    <Link
      href={href}
      className={cn(
        'flex flex-col items-center justify-center gap-1 transition-all duration-200',
        isActive ? 'scale-110 text-black' : 'text-gray-400 hover:text-black'
      )}
    >
      <Icon className="size-6" strokeWidth={isActive ? 2.5 : 2} />
      <span
        className={cn(
          'hidden text-[10px] font-medium transition-opacity md:block',
          isActive ? 'opacity-100' : 'opacity-70'
        )}
      >
        {label}
      </span>
    </Link>
  )
}
