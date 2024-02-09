import { UpdateIndicator } from "./update-indicator"
import { WindowSizeIndicator } from "./window-size-indicator"

interface SiteFooterProps {
  lastUpdateAt: string
}

export function SiteFooter({ lastUpdateAt }: SiteFooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 hidden h-fit w-full justify-between lg:flex">
      <WindowSizeIndicator />
      <UpdateIndicator lastUpdateAt={lastUpdateAt} />
    </footer>
  )
}
