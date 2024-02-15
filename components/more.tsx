import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"

import { ExternalLink } from "./ui/external-link"

export function AboutMore() {
  const t = useTranslations("about.more")

  const mailTo = `mailto:${siteConfig.email}?subject=안녕하세요, 선우님`

  return (
    <section className="mt-16 sm:mt-32">
      <h3 className="mb-5 block font-medium text-gray-1100 sm:mb-4">
        {t("title")}
      </h3>
      <p className="break-keep text-gray-1000">
        {t.rich("description", {
          email: (chunks) => (
            <ExternalLink href={mailTo}>{chunks}</ExternalLink>
          ),
        })}
      </p>
    </section>
  )
}
