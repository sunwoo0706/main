"use client"

import { useTheme } from "next-themes"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Ping } from "./ui/ping"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

export function SwitchTheme() {
  const { theme: currentTheme, setTheme } = useTheme()

  const themeLabels: Record<string, string> = {
    light: "밝은",
    dark: "어두운",
    system: "시스템",
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icons.sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
          <Icons.moon className="hidden h-5 w-5 dark:block" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-1">
        <div className="flex flex-col gap-1">
          {["light", "dark", "system"].map((theme) => (
            <Button
              className="flex h-6 w-20 justify-between rounded-sm p-1.5 text-xs"
              variant="ghost"
              onClick={() => setTheme(theme)}
              size="sm"
            >
              {themeLabels[theme]}
              {theme === currentTheme ? <Ping /> : null}
            </Button>
          ))}
        </div>
      </PopoverContent>
      <span className="sr-only">switch theme</span>
    </Popover>
  )
}
