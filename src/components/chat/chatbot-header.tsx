'use client'

import { Sparkles, X } from 'lucide-react'

interface ChatbotHeaderProps {
  onClose: () => void
}

export function ChatbotHeader({ onClose }: ChatbotHeaderProps) {
  return (
    <div className="flex h-[82px] shrink-0 items-center justify-between border-b border-gray-200 p-5">
      <div className="flex items-center gap-2">
        <div className="border-primary/08 bg-primary/08 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border">
          <Sparkles
            className="text-primary h-[18px] w-[18px]"
            strokeWidth={1.5}
          />
        </div>

        <div className="flex flex-col gap-[6px]">
          <span className="font-[family-name:var(--font-inter-tight),sans-serif] text-base leading-[105%] font-semibold text-black">
            Coach AI
          </span>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
            <span className="text-primary font-[family-name:var(--font-inter-tight),sans-serif] text-xs leading-[115%] font-normal">
              Online
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={onClose}
        className="flex size-6 cursor-pointer items-center justify-center"
        aria-label="Fechar chat"
      >
        <X className="size-6 text-gray-500" strokeWidth={1.6} />
      </button>
    </div>
  )
}
