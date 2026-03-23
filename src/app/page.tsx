import { BottomNavbar } from '@components/bottom-navbar'
import { withOnboarding } from '@components/with-onboarding'
import { getHomeData } from '@http/api-client-generated'
import { authClient } from '@lib/auth-client'
import dayjs from 'dayjs'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { ConsistencySection } from './_components/consistency-section'
import { HomeHeader } from './_components/home-header'
import { TodayWorkoutSection } from './_components/today-workout-section'

function getTodayIndex(): number {
  const day = new Date().getDay()

  return day === 0 ? 6 : day - 1
}

async function Home() {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  })

  if (!session?.data?.session) {
    redirect('/login')
  }

  const date = dayjs().format('YYYY-MM-DD')

  const data = await getHomeData(date)

  const todayIndex = getTodayIndex()

  return (
    <main className="flex min-h-screen flex-col bg-white pb-24">
      <HomeHeader userName={session.data.user.name} />

      <ConsistencySection
        consistencyByDay={data.consistencyByDay}
        workoutStreak={data.workoutStreak}
        todayIndex={todayIndex}
      />

      <TodayWorkoutSection todayWorkoutDay={data.todayWorkoutDay} />

      <BottomNavbar />
    </main>
  )
}

export default withOnboarding(Home)
