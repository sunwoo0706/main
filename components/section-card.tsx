interface SectionCardProps {
  title: string
  description: string
  link: string
}

export function SectionCard({ title, description, link }: SectionCardProps) {
  return (
    <a
      href={link}
      className="-mx-3 flex flex-col rounded-md p-3 no-underline transition ease-in-out hover:bg-[#F5F4F4] dark:hover:bg-[#191918]"
      target="_blank"
      rel="noreferrer"
    >
      <span>{title}</span>
      <span className="text-gray-1000">{description}</span>
    </a>
  )
}
