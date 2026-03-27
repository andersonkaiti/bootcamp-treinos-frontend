'use client'

import { Loader } from '@components/ui/loader'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

interface RedirectWithToastProps {
  href: string
  message: string
}

export function RedirectWithToast({ href, message }: RedirectWithToastProps) {
  const router = useRouter()

  useEffect(() => {
    toast.error(message)
    router.replace(href)
  }, [href, message, router])

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <Loader size={32} />
    </div>
  )
}
