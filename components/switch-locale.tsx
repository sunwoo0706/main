"use client"

import { useRouter } from "next/navigation"
import { useLocale } from "next-intl"

import { siteConfig } from "@/config/site"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Ping } from "./ui/ping"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

interface IProps {
  localeLabels: Record<string, string>
}

export function SwitchLocale({ localeLabels }: IProps) {
  const router = useRouter()
  const nowLocale = useLocale()

  const setLocale = (locale: string) => {
    router.push(`/${locale}/`)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icons.languages className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-1">
        <div className="flex flex-col gap-1">
          {siteConfig.locales.map((locale) => (
            <Button
              className="flex h-6 w-20 justify-between rounded-sm p-1.5 text-xs"
              variant="ghost"
              onClick={() => setLocale(locale)}
              size="sm"
            >
              {localeLabels[locale]}
              {nowLocale === locale && <Ping />}
            </Button>
          ))}
        </div>
      </PopoverContent>
      <span className="sr-only">switch locale</span>
    </Popover>
  )
}
