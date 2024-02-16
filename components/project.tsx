import { useTranslations } from "next-intl"

import { SectionCard } from "./section-card"

export function AboutProject() {
  const t = useTranslations("about.project")

  const tCards = (key: string) => t(`cards.${key}`)

  const projectCardKeyList = [
    "projectCard1",
    "projectCard2",
    "projectCard3",
  ] as const

  return (
    <section className="mt-16 sm:mt-32">
      <h3 className="mb-5 block font-medium text-gray-1100 sm:mb-4">
        {t("title")}
      </h3>
      <div className="flex flex-col gap-7 sm:gap-4">
        {projectCardKeyList.map((key) => (
          <SectionCard
            key={key}
            title={tCards(`${key}.title`)}
            description={tCards(`${key}.description`)}
            link={tCards(`${key}.link`)}
          />
        ))}
      </div>
    </section>
  )
}
