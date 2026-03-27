import { BackButton } from '@components/back-button'

export function WorkoutDayHeader() {
  return (
    <header className="flex items-center justify-between px-5 py-5">
      <BackButton />

      <h1 className="font-display text-lg font-semibold text-black">
        Treino de Hoje
      </h1>

      <div className="size-6" />
    </header>
  )
}
