"use client"

import { Icons } from "./icons"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function MyAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/sunwoo0706.png" />
      <AvatarFallback>
        <div className="animate-spin rounded-full">
          <Icons.loader />
        </div>
      </AvatarFallback>
    </Avatar>
  )
}
