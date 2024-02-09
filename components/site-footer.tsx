import { LicenseIndicator } from "./license-indicator"
import { WindowSizeIndicator } from "./window-size-indicator"

export function SiteFooter() {
  return (
    <footer className="fixed bottom-0 left-0 flex h-fit w-full justify-between">
      <WindowSizeIndicator />
      <LicenseIndicator />
    </footer>
  )
}
