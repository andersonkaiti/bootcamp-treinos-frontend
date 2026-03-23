import { Chat } from '@components/chat/chat'
import { withAuth } from '@components/with-auth'
import { withPendingOnboarding } from '@components/with-onboarding'
import Image from 'next/image'
import Link from 'next/link'

const ONBOARDING_INITIAL_MESSAGES = [
  'Bem-vindo ao FIT.AI! 🎉',
  'O app que vai transformar a forma como você treina. Aqui você monta seu plano de treino personalizado, acompanha sua evolução com estatísticas detalhadas e conta com uma IA disponível 24h para te guiar em cada exercício.',
  'Tudo pensado para você alcançar seus objetivos de forma inteligente e consistente.',
  'Vamos configurar seu perfil?',
]

const ONBOARDING_SUGGESTED_REPLIES = ['Começar!']

async function OnboardingPage() {
  return (
    <main className="mx-auto flex h-dvh w-full max-w-6xl flex-col bg-white">
      <header className="flex h-[82px] shrink-0 items-center justify-between border-b border-neutral-100 p-5">
        <Image src="/icons/fit-ai-logo.svg" alt="Logo" width={60} height={60} />

        <Link
          href="/"
          className="flex h-9 items-center justify-center rounded-full bg-blue-600 px-4 py-2 font-(family-name:--font-inter-tight) text-sm leading-none font-semibold whitespace-nowrap text-white no-underline"
        >
          Acessar FIT.AI
        </Link>
      </header>

      <Chat
        initialAssistantMessages={ONBOARDING_INITIAL_MESSAGES}
        suggestedReplies={ONBOARDING_SUGGESTED_REPLIES}
      />
    </main>
  )
}

export default withAuth(withPendingOnboarding(OnboardingPage))
