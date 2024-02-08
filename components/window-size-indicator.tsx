"use client"

import { useWindowSize } from "@/hooks/use-window-size"

export function WindowSizeIndicator() {
  const { width, height } = useWindowSize()

  return (
    <div className="fixed bottom-1 left-1 z-50 p-6">
      <p className="text-white font-mono text-xs">
        {width}x{height}
      </p>
      <span className="sr-only">window size indicator</span>
    </div>
  )
}
