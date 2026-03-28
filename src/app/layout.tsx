import './globals.css'

import { ServiceWorkerRegister } from '@components/pwa/service-worker-register'
import { Toaster } from '@components/ui/sonner'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
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
  title: 'TreinAI',
  description: 'Site desenvolvido para auxiliar no treinamento de atletas.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/icons/apple-touch-icon.png', sizes: '180x180' },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
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

            <ServiceWorkerRegister />
          </NuqsAdapter>
        </Suspense>

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  )
}
