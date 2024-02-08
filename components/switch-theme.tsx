import { Icons } from "./icons"
import { Button } from "./ui/button"

export function SwitchTheme() {
  return (
    <div className="fixed bottom-1 right-1 z-50 p-6">
      <Button variant="ghost" size="icon">
        <Icons.sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
        <Icons.moon className="hidden h-5 w-5 dark:block" />
      </Button>
      <span className="sr-only">switch theme</span>
    </div>
  )
}
