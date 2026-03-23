'use client'

import 'streamdown/styles.css'

import { cn } from '@lib/cn'
import { UIMessage } from 'ai'
import { RefObject } from 'react'
import { Streamdown } from 'streamdown'

function getTextFromMessage(message: UIMessage): string {
  if (!message.parts || !Array.isArray(message.parts)) return ''
  return message.parts
    .filter(
      (part): part is { type: 'text'; text: string } => part.type === 'text'
    )
    .map((part) => part.text)
    .join('')
}

interface ChatbotMessageListProps {
  messages: UIMessage[]
  isLoading: boolean
  messagesEndRef: RefObject<HTMLDivElement | null>
}

export function ChatbotMessageList({
  messages,
  isLoading,
  messagesEndRef,
}: ChatbotMessageListProps) {
  const showGreeting = messages.length === 0

  return (
    <div className="flex-1 overflow-y-auto py-5">
      {showGreeting && (
        <div className="mb-3 px-5 font-[family-name:var(--font-inter-tight),sans-serif] text-[13px] text-gray-500">
          Olá! Sou sua IA personal. Como posso ajudar com seu treino hoje?
        </div>
      )}

      {messages.map((message) => {
        const text = getTextFromMessage(message)
        const isUser = message.role === 'user'

        return (
          <div
            key={message.id}
            className={cn(
              'flex flex-col',
              isUser
                ? 'items-end pr-5 pb-3 pl-[60px]'
                : 'items-start pr-[60px] pb-3 pl-5'
            )}
          >
            <div
              className={cn(
                'max-w-full rounded-xl p-3',
                isUser ? 'bg-primary' : 'bg-gray-200'
              )}
            >
              {isUser ? (
                <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-sm leading-[140%] font-normal whitespace-pre-wrap text-white">
                  {text}
                </span>
              ) : (
                <div className="font-[family-name:var(--font-inter-tight),sans-serif] text-sm leading-[140%] font-normal text-black">
                  <Streamdown>{text}</Streamdown>
                </div>
              )}
            </div>
          </div>
        )
      })}

      {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
        <div className="pr-[60px] pb-3 pl-5">
          <div className="inline-flex items-center gap-1 rounded-xl bg-gray-200 p-3">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="h-[6px] w-[6px] animate-[typing-bounce_1s_ease-in-out_infinite] rounded-full bg-[#999999]"
                style={{ animationDelay: `${index * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  )
}
