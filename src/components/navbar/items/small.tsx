import { Coins, DollarSign, Home, ScrollText } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  href: string
  text: string
  icon: ReactNode
}

export default function SmallIcons() {
  const Icon = ({ href, text, icon }: Props) => (
    <Link
      href={href}
      className="flex h-16 w-16 flex-col items-center justify-center active:scale-95 md:hidden"
    >
      {icon}
      <span className="mt-1.5 text-sm font-medium">{text}</span>
    </Link>
  )

  return (
    <>
      <Icon href="#" text="Início" icon={<Home size={24} />} />
      <Icon href="#" text="Receitas" icon={<DollarSign size={24} />} />
      <Icon href="#" text="Despesas" icon={<Coins size={24} />} />
      <Icon href="#" text="Relatório" icon={<ScrollText size={24} />} />
    </>
  )
}
