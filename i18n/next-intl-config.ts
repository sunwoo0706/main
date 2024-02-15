import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"

import { siteConfig } from "@/config/site"

export default getRequestConfig(async ({ locale }) => {
  if (!siteConfig.locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
