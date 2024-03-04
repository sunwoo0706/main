import { AboutToday } from "@/components/about-today"
import { AboutMore } from "@/components/more"
import { AboutProject } from "@/components/project"
import { SiteConsoleMessage } from "@/components/site-console-message"

export default function IndexPage() {
  return (
    <main>
      <SiteConsoleMessage />
      <AboutToday />
      <AboutProject />
      <AboutMore />
    </main>
  )
}
