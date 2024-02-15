import { useTranslations } from "next-intl"

import { MainNav } from "./main-nav"

export function SiteHeader() {
  const t = useTranslations("profile")

  return (
    <header className="mb-32 flex items-center justify-between">
      <div className="flex flex-col items-start">
        <a
          className="text-medium inline-block font-medium text-gray-1100 no-underline"
          href="/"
        >
          {t("name")}
        </a>
        <span className="text-medium font-medium leading-none text-gray-1000">
          {t("job")}
        </span>
      </div>
      <MainNav />
    </header>
  )
}
