import { clsx, type ClassValue } from "clsx"
import { twMerge as tailwindMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return tailwindMerge(clsx(inputs))
}
