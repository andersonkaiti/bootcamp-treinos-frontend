import { Chat } from '@components/chat/chat'
import { Avatar, AvatarFallback } from '@components/ui/avatar'
import { withAuth } from '@components/with-auth'
import { withPendingOnboarding } from '@components/with-onboarding'
import { X } from 'lucide-react'
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
    <main className="mx-auto flex h-dvh w-full max-w-6xl flex-col bg-white pt-4">
      <header className="flex shrink-0 items-center justify-between border-b border-neutral-100 px-5 pb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="size-10">
              <AvatarFallback className="bg-neutral-900 text-xs font-bold text-white">
                AI
              </AvatarFallback>
            </Avatar>
            <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-green-500 shadow-sm" />
          </div>
          <div className="flex flex-col">
            <span className="font-(family-name:--font-inter-tight) text-sm leading-tight font-semibold text-neutral-900">
              FIT.AI
            </span>
            <span className="text-xs leading-tight font-medium text-green-500">
              Online agora
            </span>
          </div>
        </div>

        <Link
          href="/"
          className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
          aria-label="Fechar"
        >
          <X size={18} />
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
