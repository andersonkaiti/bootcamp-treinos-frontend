import { BottomNavbar } from '@components/bottom-navbar'
import { withAuth } from '@components/with-auth'
import { getStats } from '@http/api-client-generated'
import Image from 'next/image'

import { ConsistencyHeatmap } from './_components/consistency-heatmap'
import { StatsCards } from './_components/stats-card'
import { StreakBanner } from './_components/streak-banner'

function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

async function EvolucaoPage() {
  const today = new Date()

  const startDay = new Date(today)
  startDay.setFullYear(today.getFullYear() - 1)

  const dow = startDay.getDay()
  if (dow !== 0) {
    startDay.setDate(startDay.getDate() - dow)
  }

  const stats = await getStats({
    from: formatDate(startDay),
    to: formatDate(today),
  })

  return (
    <main className="relative flex min-h-screen flex-col bg-white">
      <header className="flex h-14 items-center px-5">
        <Image
          src="/icons/fit-ai-logo.svg"
          alt="Logo"
          width={60}
          height={60}
          className="invert"
        />
      </header>

      <div className="flex flex-col gap-5 px-5 pb-28">
        <StreakBanner workoutStreak={stats.workoutStreak} />

        <section className="flex flex-col gap-3">
          <h2 className="font-[family-name:var(--font-inter-tight),sans-serif] text-[18px] leading-[140%] font-semibold text-black">
            Consistência
          </h2>

          <ConsistencyHeatmap consistencyByDay={stats.consistencyByDay} />
        </section>

        <StatsCards
          completedWorkoutsCount={stats.completedWorkoutsCount}
          conclusionRate={stats.conclusionRate}
          totalTimeInSeconds={stats.totalTimeInSeconds}
        />
      </div>

      <BottomNavbar />
    </main>
  )
}

export default withAuth(EvolucaoPage)
