"use client"

import { useWindowSize } from "@/hooks/use-window-size"

export function WindowSizeIndicator() {
  const { width, height } = useWindowSize()

  return (
    <div className="w-fit p-6">
      <p className="text-white font-mono text-xs">
        {width}x{height}
      </p>
      <span className="sr-only">window size indicator</span>
    </div>
  )
}
