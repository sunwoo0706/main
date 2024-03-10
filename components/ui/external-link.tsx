import { cx } from "class-variance-authority"

interface ExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

export function ExternalLink({
  children,
  className,
  target = "_blank",
  rel = "noreferrer",
  ...props
}: ExternalLinkProps) {
  return (
    <a
      className={cx(
        "text-gray-1000 underline decoration-1 underline-offset-2 transition hover:text-gray-1000/80",
        className
      )}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </a>
  )
}
