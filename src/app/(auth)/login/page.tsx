'use client'

import { TreinaiLogo } from '@components/treinai-logo'
import { Loader } from '@components/ui/loader'
import { env } from '@config/env'
import { authClient } from '@lib/auth-client'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useTransition } from 'react'
import { toast } from 'sonner'

export default function LoginPage() {
  const { data, isPending } = authClient.useSession()
  const [isPendingTransition, startTransition] = useTransition()

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <Loader size={32} />
      </div>
    )
  }

  if (data?.session) {
    redirect('/')
  }

  function handleGoogleLogin() {
    startTransition(async () => {
      const { error } = await authClient.signIn.social({
        provider: 'google',
        callbackURL: env.NEXT_PUBLIC_BASE_URL,
      })

      if (error) {
        toast.error('Erro ao fazer login com Google')
      }
    })
  }

  return (
    <main className="relative flex min-h-screen w-full flex-col bg-black">
      <Image
        src="/images/login-bg.png"
        alt="Login Background"
        fill
        className="object-cover"
      />

      <div className="relative z-10 flex justify-center pt-12">
        <TreinaiLogo width={85} height={38} />
      </div>

      <div className="bg-primary relative z-10 mt-auto flex flex-col items-center rounded-t-[20px] px-5 pt-12 pb-10">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-3">
            <h1
              className="text-center text-2xl leading-[110%] font-semibold text-white md:text-[32px] md:leading-[105%]"
              style={{ fontFamily: 'var(--font-inter-tight)' }}
            >
              O app que vai transformar a forma como você treina.
            </h1>
          </div>

          <button
            onClick={handleGoogleLogin}
            disabled={isPendingTransition}
            className="flex h-[38px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-3 transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPendingTransition ? (
              <Loader2 className="size-5 animate-spin text-black" />
            ) : (
              <Image
                src="/icons/google-icon.svg"
                alt="Google"
                width={24}
                height={24}
              />
            )}

            <span
              className="text-sm font-semibold text-black"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {isPendingTransition ? 'Entrando...' : 'Fazer login com Google'}
            </span>
          </button>
        </div>

        <p
          className="mt-[60px] text-center text-xs leading-[140%] text-white/70"
          style={{ fontFamily: 'var(--font-inter-tight)' }}
        >
          ©2026 Copyright Anderson Kaiti. Todos os direitos reservados
        </p>
      </div>
    </main>
  )
}
