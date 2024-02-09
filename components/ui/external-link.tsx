import { Icons } from "../icons"

interface ExternalLinkProps {
  href: string
  children: React.ReactNode
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      className="text-gray-1000 underline decoration-1 underline-offset-2 transition hover:text-gray-1000/80"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <Icons.externalLink className="inline-block align-super" size={10} />
    </a>
  )
}
