interface SectionCardProps {
  title: string
  description: string
  link: string
}

export function SectionCard({ title, description, link }: SectionCardProps) {
  return (
    <a
      href={link}
      className="dark:hover:bg-gray-200 -mx-3 flex flex-col rounded-md px-3 no-underline transition ease-in-out hover:bg-[#F5F4F4] sm:py-3"
      target="_blank"
      rel="noreferrer"
    >
      <span>{title}</span>
      <span className="text-gray-1100">{description}</span>
    </a>
  )
}
