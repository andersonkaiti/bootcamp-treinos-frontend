import { cn } from '@lib/cn'
import { Loader2 } from 'lucide-react'

interface LoaderProps {
  size?: number
  className?: string
}

export function Loader({ size = 24, className }: LoaderProps) {
  return <Loader2 size={size} className={cn('animate-spin', className)} />
}
