export async function handleUnauthorized(): Promise<void> {
  if (typeof window === 'undefined') {
    const { redirect } = await import('next/navigation')
    redirect('/login')
  } else {
    window.location.replace('/login')
  }
}
