import { cn } from "@/lib/utils"

interface PingProps {
  className?: string
}

export function Ping({ className }: PingProps) {
  return (
    <span className={cn("relative flex h-1.5 w-1.5", className)}>
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75 motion-safe:animate-ping" />
      <span className="relative inline-flex h-full w-full rounded-full bg-[#4ade80]" />
      <span className="sr-only">active</span>
    </span>
  )
}
