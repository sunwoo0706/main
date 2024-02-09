import { SectionCard } from "./section-card"

export function AboutProject() {
  return (
    <section className="mt-16 sm:mt-32">
      <h3 className="mb-5 block font-medium text-gray-1100 sm:mb-4">
        프로젝트
      </h3>
      <div className="flex flex-col gap-7 sm:gap-4">
        <SectionCard
          title="이제부터"
          description="프로젝트는 이제부터 할게요"
          link="https://example.com"
        />
        <SectionCard
          title="이제부터"
          description="프로젝트는 이제부터 할게요"
          link="https://example.com"
        />
        <SectionCard
          title="이제부터"
          description="프로젝트는 이제부터 할게요"
          link="https://example.com"
        />
      </div>
    </section>
  )
}
