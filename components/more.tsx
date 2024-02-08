import { siteConfig } from "@/config/site"

import { Icons } from "./icons"

export function AboutMore() {
  return (
    <section className="-mb-3 mt-16 sm:mt-32">
      <h3 className="mb-5 block font-medium text-gray-1100 sm:mb-4">더보기</h3>
      <span className="text-gray-1000">
        <a
          className="underline decoration-1 underline-offset-2 transition"
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <Icons.externalLink className="inline-block align-super" size={12} />
        </a>{" "}
        에서 제가 작성한 코드들을 보실 수 있습니다.
      </span>
    </section>
  )
}
