'use client'

import { Button } from '@components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card'
import { AlertCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    if (error.message.includes('401')) {
      router.push('/login')
    }
  }, [error, router])

  return (
    <div className="bg-background flex h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
            <AlertCircle className="text-destructive h-12 w-12" />
          </div>
          <CardTitle>Algo deu errado</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-center text-sm">
            Desculpe, encontramos um erro inesperado. Tente recarregar a página.
          </p>

          {error.message && (
            <details className="border-border bg-muted cursor-pointer rounded-md border p-2 text-xs">
              <summary className="text-muted-foreground font-medium">
                Detalhes do erro
              </summary>
              <pre className="text-destructive mt-2 overflow-auto text-xs">
                {error.message}
              </pre>
            </details>
          )}

          <Button
            onClick={() => reset()}
            className="w-full"
            size="lg"
            variant="default"
          >
            Tentar novamente
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
