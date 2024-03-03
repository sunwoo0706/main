import {
  Pathnames,
  createLocalizedPathnamesNavigation,
} from "next-intl/navigation"

import { siteConfig } from "@/config/site"

// Localized pathnames
export const pathnames = {
  "/": "/",
  // "/pathnames": {
  //   en: "/en/pathnames",
  //   ko: "/ko/경로이름",
  // },
} satisfies Pathnames<typeof siteConfig.locales>

// Use the default: `always`
export const localePrefix = undefined

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales: siteConfig.locales,
    pathnames,
    localePrefix,
  })

export type AppPathnames = keyof typeof pathnames
