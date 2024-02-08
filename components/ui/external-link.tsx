import { Icons } from "../icons"

interface ExternalLinkProps {
  href: string
  children: React.ReactNode
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      className="underline decoration-1 underline-offset-2 transition"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <Icons.externalLink className="inline-block align-super" size={12} />
    </a>
  )
}
