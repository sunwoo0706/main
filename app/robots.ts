import { MetadataRoute } from "next"

import { siteConfig } from "@/config/site"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: siteConfig.locales.map((locale) => `/${locale}`),
    },
    sitemap: "https://sunwoo.xyz/sitemap.xml",
  }
}
