"use client"

import { useEffect } from "react"

export function SiteConsoleMessage() {
  useEffect(() => {
    console.log("%c Don't be lazy", "color: #b4b2ac")
  }, [])

  return null
}
