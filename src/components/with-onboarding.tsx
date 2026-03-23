import { checkOnboardingStatus } from '@utils/check-onboarding'
import { redirect } from 'next/navigation'

export function withOnboarding<T extends object>(
  Component: (props: T) => Promise<React.JSX.Element>
) {
  return async function OnboardedPage(props: T) {
    const hasCompletedOnboarding = await checkOnboardingStatus()

    if (!hasCompletedOnboarding) {
      redirect('/onboarding')
    }

    return Component(props)
  }
}

export function withPendingOnboarding<T extends object>(
  Component: (props: T) => Promise<React.JSX.Element>
) {
  return async function PendingOnboardingPage(props: T) {
    const hasCompletedOnboarding = await checkOnboardingStatus()

    if (hasCompletedOnboarding) {
      redirect('/')
    }

    return Component(props)
  }
}
