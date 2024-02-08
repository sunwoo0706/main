"use client"

import { useTheme } from "next-themes"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

export function SwitchTheme() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed bottom-1 right-1 z-50 p-6">
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
                className="h-6 text-xs"
                variant="ghost"
                onClick={() => setTheme(theme)}
                size="sm"
              >
                {theme}
              </Button>
            ))}
          </div>
        </PopoverContent>
        <span className="sr-only">switch theme</span>
      </Popover>
    </div>
  )
}
