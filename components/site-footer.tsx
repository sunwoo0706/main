import { LicenseIndicator } from "./license-indicator"
import { WindowSizeIndicator } from "./window-size-indicator"

export function SiteFooter() {
  return (
    <footer className="fixed bottom-0 left-0 hidden h-fit w-full justify-between lg:flex">
      <WindowSizeIndicator />
      <LicenseIndicator />
    </footer>
  )
}
