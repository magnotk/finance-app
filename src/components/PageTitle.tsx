interface Props {
  title: string
}

export function PageTitle({ title }: Props) {
  return (
    <h1 className="text-lg text-neutral-600 dark:text-neutral-400">{title}</h1>
  )
}
