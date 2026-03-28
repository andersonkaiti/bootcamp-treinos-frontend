'use client'

import { useEffect } from 'react'

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    if (!('serviceWorker' in navigator)) {
      console.log('Service Workers are not supported')
      return
    }

    const registerServiceWorker = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/api/sw', {
          scope: '/',
        })
        console.log('Service Worker registered:', registration)
      } catch (error) {
        console.error('Service Worker registration failed:', error)
      }
    }

    // Register service worker when page loads
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', registerServiceWorker)
      return () =>
        document.removeEventListener('DOMContentLoaded', registerServiceWorker)
    } else {
      registerServiceWorker()
    }
  }, [])

  return null
}
