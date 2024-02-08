import { siteConfig } from "@/config/site"

import { ExternalLink } from "./ui/external-link"

export function AboutMore() {
  return (
    <section className="-mb-3 mt-16 sm:mt-32">
      <h3 className="mb-5 block font-medium text-gray-1100 sm:mb-4">더보기</h3>
      <span className="text-gray-1000">
        <ExternalLink href={siteConfig.links.github}>Github</ExternalLink> 에서
        제가 작성한 코드들을 보실 수 있습니다.
      </span>
    </section>
  )
}
