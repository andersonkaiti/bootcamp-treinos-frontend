import './globals.css'

import { Toaster } from '@components/ui/sonner'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import { NuqsAdapter } from 'nuqs/adapters/next'
import { Suspense } from 'react'

const Chatbot = dynamic(() =>
  import('@components/chat/chatbot').then((m) => m.Chatbot)
)

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bootcamp Treinos',
  description: 'Bootcamp Treinos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <Suspense>
          <NuqsAdapter>
            {children}

            <Chatbot />

            <Toaster richColors />
          </NuqsAdapter>
        </Suspense>
      </body>
    </html>
  )
}
