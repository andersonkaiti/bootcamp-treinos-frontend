import './globals.css'

import { Chatbot } from '@components/chat/chatbot'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NuqsAdapter } from 'nuqs/adapters/next'

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
        <NuqsAdapter>
          {children}

          <Chatbot />
        </NuqsAdapter>
      </body>
    </html>
  )
}
