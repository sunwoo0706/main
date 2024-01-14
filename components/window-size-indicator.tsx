"use client"

import { useWindowSize } from "@/hooks/use-window-size"

export function TailwindIndicator() {
  const { width, height } = useWindowSize()

  return (
    <div className="text-white fixed bottom-1 left-1 z-50 p-6 font-mono text-xs">
      {width}x{height}
    </div>
  )
}
