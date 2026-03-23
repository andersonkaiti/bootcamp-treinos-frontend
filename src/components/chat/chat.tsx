'use client'

import { useChat } from '@ai-sdk/react'
import { env } from '@config/env'
import { DefaultChatTransport, UIMessage } from 'ai'
import { useEffect, useMemo, useRef } from 'react'
import { toast } from 'sonner'

import { ChatbotInput } from './chatbot-input'
import { ChatbotMessageList } from './chatbot-message-list'

interface ChatProps {
  initialAssistantMessages?: string[]
  suggestedReplies?: string[]
}

export function Chat({
  initialAssistantMessages = [],
  suggestedReplies = [],
}: ChatProps) {
  const initialMessages: UIMessage[] = useMemo(() => {
    return initialAssistantMessages.map((content, index) => ({
      id: `initial-${index}`,
      role: 'assistant',
      content,
      parts: [{ type: 'text', text: content }],
    }))
  }, [initialAssistantMessages])

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: `${env.NEXT_PUBLIC_API_URL}/ai`,
        credentials: 'include',
      }),
    []
  )

  const { messages, sendMessage, status } = useChat({
    transport,
    messages: initialMessages,
    onError: () => {
      toast.error('Erro ao enviar mensagem. Tente novamente.')
    },
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const isLoading = status === 'streaming' || status === 'submitted'
  const showSuggestions = messages.length <= initialMessages.length

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, status])

  function handleSend(text: string) {
    if (!text.trim() || isLoading) return
    sendMessage({ text })
  }

  function handleSuggest(text: string) {
    sendMessage({ text })
  }

  return (
    <div className="flex flex-1 flex-col overflow-hidden bg-white">
      <ChatbotMessageList
        messages={messages}
        isLoading={isLoading}
        messagesEndRef={messagesEndRef}
      />
      <ChatbotInput
        isOpen={true}
        isLoading={isLoading}
        showSuggestions={showSuggestions}
        onSend={handleSend}
        onSuggest={handleSuggest}
        suggestedMessages={suggestedReplies}
      />
    </div>
  )
}
