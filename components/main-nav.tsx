import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"

import { Icons } from "./icons"
import { SwitchTheme } from "./switch-theme"

export function MainNav() {
  const t = useTranslations("ui")

  const themeLabels: Record<string, string> = {
    light: t("themes.light"),
    dark: t("themes.dark"),
    system: t("themes.system"),
  }

  return (
    <nav className="flex gap-0.5">
      <SwitchTheme themeLabels={themeLabels} />
      <a
        className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        href={siteConfig.links.github}
        target="_blank"
        rel="noreferrer"
      >
        <Icons.github className="h-5 w-5" />
      </a>
      <a
        className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        href={siteConfig.links.twitter}
        target="_blank"
        rel="noreferrer"
      >
        <Icons.twitter className="h-4 w-4" />
      </a>
    </nav>
  )
}
