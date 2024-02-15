import { AboutToday } from "@/components/about-today"
import { AboutMore } from "@/components/more"
import { AboutProject } from "@/components/project"

export default function IndexPage() {
  return (
    <main>
      <AboutToday />
      <AboutProject />
      <AboutMore />
    </main>
  )
}
