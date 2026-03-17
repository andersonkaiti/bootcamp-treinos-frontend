'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="flex size-6 cursor-pointer items-center justify-center"
      aria-label="Voltar"
    >
      <ChevronLeft className="size-6 text-gray-500" strokeWidth={1.6} />
    </button>
  )
}
