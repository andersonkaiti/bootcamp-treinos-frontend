import { BottomNavbar } from '@components/bottom-navbar'

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-50 pb-32">
      <div className="flex-1">{children}</div>

      <BottomNavbar />
    </main>
  )
}
