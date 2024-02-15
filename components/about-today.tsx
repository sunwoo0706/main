import { useTranslations } from "next-intl"

export function AboutToday() {
  const t = useTranslations("about.today")

  return (
    <section>
      <h3 className="mb-5 block font-medium text-gray-1100 sm:mb-4">
        {t("title")}
      </h3>
      <p
        className="break-keep text-gray-1000"
        dangerouslySetInnerHTML={{ __html: t("description") }}
      />
    </section>
  )
}
