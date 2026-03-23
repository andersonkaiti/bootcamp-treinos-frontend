'use client'

import { Form, FormControl, FormField, FormItem } from '@components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@lib/utils'
import { ArrowUp } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'

import { SUGGESTED_MESSAGES } from './use-chatbot'

const chatSchema = z.object({
  message: z.string().min(1),
})

type ChatFormValues = z.infer<typeof chatSchema>

interface ChatbotInputProps {
  isOpen: boolean
  isLoading: boolean
  showSuggestions: boolean
  onSend: (text: string) => void
  onSuggest: (text: string) => void
}

export function ChatbotInput({
  isOpen,
  isLoading,
  showSuggestions,
  onSend,
  onSuggest,
}: ChatbotInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const form = useForm<ChatFormValues>({
    resolver: zodResolver(chatSchema),
    defaultValues: { message: '' },
  })

  const message = useWatch({
    control: form.control,
    name: 'message',
    defaultValue: '',
  })
  const canSend = !!message.trim() && !isLoading

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => textareaRef.current?.focus(), 300)
    }
  }, [isOpen])

  function onSubmit(data: ChatFormValues) {
    onSend(data.message)
    form.reset()
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      form.handleSubmit(onSubmit)()
    }
  }

  return (
    <div className="flex shrink-0 flex-col gap-3">
      {showSuggestions && (
        <div className="flex gap-[10px] overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SUGGESTED_MESSAGES.map((msg) => (
            <button
              key={msg}
              onClick={() => onSuggest(msg)}
              className="flex shrink-0 cursor-pointer items-center justify-center rounded-[100px] border-none bg-gray-200 px-4 py-2 font-[family-name:var(--font-inter-tight),sans-serif] text-sm leading-none whitespace-nowrap text-black"
            >
              {msg}
            </button>
          ))}
        </div>
      )}

      <Form {...form}>
        <form
          onSubmit={(e) => void form.handleSubmit(onSubmit)(e)}
          className="flex min-h-[82px] items-end gap-2 border-t border-gray-200 p-5"
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <textarea
                    {...field}
                    ref={(el) => {
                      field.ref(el)
                      ;(
                        textareaRef as React.MutableRefObject<HTMLTextAreaElement | null>
                      ).current = el
                    }}
                    onChange={(e) => {
                      field.onChange(e)
                      const el = e.target
                      el.style.height = 'auto'
                      el.style.height = `${Math.min(el.scrollHeight, 120)}px`
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="Digite sua mensagem"
                    disabled={isLoading}
                    rows={1}
                    className="max-h-[120px] w-full resize-none overflow-y-auto rounded-2xl border border-gray-200 bg-gray-200 px-4 py-3 font-[family-name:var(--font-inter-tight),sans-serif] text-sm leading-[17px] text-black outline-none"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={!canSend}
            className={cn(
              'mb-px flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[99px] border-none transition-colors duration-150',
              canSend
                ? 'bg-primary cursor-pointer'
                : 'bg-primary/20 cursor-default'
            )}
            aria-label="Enviar mensagem"
          >
            <ArrowUp className="size-5 text-white" strokeWidth={1.6} />
          </button>
        </form>
      </Form>
    </div>
  )
}
