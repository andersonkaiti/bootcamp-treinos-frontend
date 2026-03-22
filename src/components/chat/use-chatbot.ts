'use client'

import { useChat } from '@ai-sdk/react'
import { env } from '@config/env'
import { DefaultChatTransport } from 'ai'
import { parseAsBoolean, parseAsString, useQueryStates } from 'nuqs'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export const SUGGESTED_MESSAGES = [
  'Monte meu plano de treino',
  'Mudar objetivo',
  'Atualizar medidas',
]

export function useChatbot() {
  const [params, setParams] = useQueryStates({
    chat_open: parseAsBoolean.withDefault(false),
    chat_initial_message: parseAsString.withDefault(''),
  })

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: `${env.NEXT_PUBLIC_API_URL}/ai`,
        credentials: 'include',
      }),
    []
  )

  const { messages, sendMessage, status } = useChat({ transport })

  const [input, setInput] = useState('')
  const initialMessageSent = useRef(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const isOpen = params.chat_open
  const initialMessage = params.chat_initial_message
  const isLoading = status === 'streaming' || status === 'submitted'
  const showSuggestions = messages.length === 0

  useEffect(() => {
    if (
      isOpen &&
      initialMessage &&
      !initialMessageSent.current &&
      messages.length === 0
    ) {
      initialMessageSent.current = true
      sendMessage({ text: initialMessage })
      setParams({ chat_initial_message: '' })
    }
  }, [isOpen, initialMessage, messages.length, sendMessage, setParams])

  useEffect(() => {
    if (!isOpen) {
      initialMessageSent.current = false
    }
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, status])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => textareaRef.current?.focus(), 300)
    }
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleClose = useCallback(() => {
    setParams({ chat_open: false, chat_initial_message: '' })
  }, [setParams])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') handleClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', onKeyDown)
      return () => document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, handleClose])

  function handleSend() {
    const text = input.trim()
    if (!text || isLoading) {
      return
    }
    sendMessage({ text })
    setInput('')
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }

  function handleSuggest(text: string) {
    sendMessage({ text })
  }

  function handleTextareaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(event.target.value)
    const element = event.target
    element.style.height = 'auto'
    element.style.height = `${Math.min(element.scrollHeight, 120)}px`
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }
  }

  return {
    messages,
    input,
    isOpen,
    isLoading,
    showSuggestions,
    textareaRef,
    messagesEndRef,
    handleClose,
    handleSend,
    handleSuggest,
    handleTextareaChange,
    handleKeyDown,
  }
}
