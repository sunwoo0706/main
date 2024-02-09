"use client"

import { SwitchTheme } from "./switch-theme"

export function SiteHeader() {
  return (
    <header className="mb-32 flex items-center justify-between">
      <div className="flex flex-col items-start">
        <a
          className="text-medium inline-block font-medium text-gray-1100 no-underline"
          href="/"
        >
          이선우
        </a>
        <span className="text-medium font-medium leading-none text-gray-1000">
          프런트엔드 엔지니어
        </span>
      </div>
      <SwitchTheme />
    </header>
  )
}
