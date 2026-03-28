import { TreinaiLogo } from '@components/treinai-logo'
import Image from 'next/image'

interface PageHeaderProps {
  title?: string
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between px-6">
      <TreinaiLogo width={48} height={48} className="invert" />

      {title && (
        <h1 className="font-display text-lg font-semibold text-zinc-900">
          {title}
        </h1>
      )}

      {/* Placeholder for potential right-side actions like settings or notifications */}
      <div className="w-12" />
    </header>
  )
}
