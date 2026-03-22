'use client'

import { Sparkles } from 'lucide-react'
import { parseAsBoolean, parseAsString, useQueryStates } from 'nuqs'

export function ChatbotButton() {
  const [, setParams] = useQueryStates({
    chat_open: parseAsBoolean.withDefault(false),
    chat_initial_message: parseAsString.withDefault(''),
  })

  function handleOpenChat() {
    setParams({
      chat_open: true,
      chat_initial_message: '',
    })
  }

  return (
    <button
      className="bg-primary flex size-14 cursor-pointer items-center justify-center rounded-full"
      aria-label="Abrir FIT.AI"
      onClick={handleOpenChat}
    >
      <Sparkles className="size-6 text-white" strokeWidth={2} />
    </button>
  )
}
