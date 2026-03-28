import { TreinaiLogo } from '@components/treinai-logo'
import Image from 'next/image'

interface HomeHeaderProps {
  userName: string
}

export function HomeHeader({ userName }: HomeHeaderProps) {
  return (
    <section className="relative h-[296px] w-full overflow-hidden rounded-b-[20px]">
      <Image
        src="/images/home-banner.jpg"
        alt="Fitness background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-between p-5 pb-10">
        <TreinaiLogo width={60} height={60} />

        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1.5">
            <h1 className="font-display text-2xl font-semibold text-white">
              Olá, {userName}
            </h1>
            <p className="font-display text-sm text-white/70">
              Bora treinar hoje?
            </p>
          </div>

          <button className="bg-primary flex items-center justify-center rounded-full px-4 py-2">
            <span className="font-display text-sm font-semibold text-white">
              Bora!
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
