import Link from 'next/link'

interface Props {
  href: string
  text: string
}

export default function MediumIcons() {
  const Icon = ({ href, text }: Props) => (
    <Link
      href={href}
      className="mr-2 hidden items-center justify-center rounded-md md:flex"
    >
      <span className="font-medium">{text}</span>
    </Link>
  )

  return (
    <>
      <Icon href="#" text="Início" />
      <Icon href="#" text="Receitas" />
      <Icon href="#" text="Despesas" />
      <Icon href="#" text="Relatórios" />
    </>
  )
}
