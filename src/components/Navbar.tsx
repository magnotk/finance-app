'use client'

import { FiArrowLeft } from 'react-icons/fi'
import ThemeSwitcher from './ThemeSwitcher'
import { ReactNode, useState } from 'react'
import Link from 'next/link'
import {
  GiHamburgerMenu,
  GiHouse,
  GiPayMoney,
  GiReceiveMoney,
} from 'react-icons/gi'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  function Modal() {
    return (
      <div
        onClick={() => setOpen(false)}
        className={`fixed left-0 top-0 z-10 min-h-screen w-full bg-neutral-600/90 dark:bg-neutral-900/90 ${open ? 'flex flex-col' : 'hidden'}`}
      >
        <nav className="flex justify-between border-b border-neutral-400 p-5">
          <FiArrowLeft
            className="cursor-pointer text-white"
            onClick={() => setOpen(false)}
          />
        </nav>
        <section className="flex flex-wrap items-center gap-5 p-5">
          <ModalItem href="/" title="Início" icon={<GiHouse size={26} />} />
          <ModalItem
            href="/expense"
            title="Despesas"
            icon={<GiPayMoney size={26} />}
          />
          <ModalItem
            href="/receipt"
            title="Receitas"
            icon={<GiReceiveMoney size={26} />}
          />
        </section>
      </div>
    )
  }

  function ModalItem({
    href,
    title,
    icon,
  }: {
    href: string
    title: string
    icon: ReactNode
  }) {
    return (
      <Link
        href={href}
        className="flex h-20 w-24 flex-col items-center justify-center gap-1.5 truncate rounded-2xl border-2 bg-neutral-600 text-white dark:bg-neutral-800"
      >
        {icon}
        {title}
      </Link>
    )
  }

  return (
    <nav className="flex justify-between border-b border-neutral-400 p-5">
      <Modal />
      <GiHamburgerMenu
        className={`cursor-pointer ${open && 'text-transparent'}`}
        onClick={() => setOpen(true)}
      />
      <ThemeSwitcher />
    </nav>
  )
}
