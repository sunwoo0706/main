import { MetadataRoute } from "next"

import { siteConfig } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return siteConfig.locales.map((locale) => ({
    url: `https://sunwoo.xyz/${locale}/`,
    lastModified: new Date(),
  }))
}
