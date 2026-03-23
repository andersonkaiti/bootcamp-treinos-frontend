'use client'

import { ChatbotHeader } from './chatbot-header'
import { ChatbotInput } from './chatbot-input'
import { ChatbotMessageList } from './chatbot-message-list'
import { useChatbot } from './use-chatbot'

export function Chatbot() {
  const {
    messages,
    isOpen,
    isLoading,
    showSuggestions,
    messagesEndRef,
    handleClose,
    handleSend,
    handleSuggest,
  } = useChatbot()

  if (!isOpen) {
    return null
  }

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/30"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-50 flex flex-col px-4 pt-[160px] pb-4">
        <div className="isolate mx-auto flex w-full max-w-4xl flex-1 flex-col overflow-hidden rounded-[20px] bg-white">
          <ChatbotHeader onClose={handleClose} />

          <ChatbotMessageList
            messages={messages}
            isLoading={isLoading}
            messagesEndRef={messagesEndRef}
          />

          <ChatbotInput
            isOpen={isOpen}
            isLoading={isLoading}
            showSuggestions={showSuggestions}
            onSend={handleSend}
            onSuggest={handleSuggest}
          />
        </div>
      </div>
    </>
  )
}
