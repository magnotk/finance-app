'use client'

import { Button } from '@nextui-org/react'
import { ButtonSubmit } from '../ButtonSubmit'
import Link from 'next/link'
import { ExpenseCategory } from '@prisma/client'
import { InputCategory } from '../inputs/Category'
import { InputDescription } from '../inputs/Description'
import { InputValue } from '../inputs/Value'
import { InputRecurrency } from '../inputs/Recurrency'

interface Props {
  categories: ExpenseCategory[]
}

export function ExpenseForm({ categories }: Props) {
  return (
    <form action="" className="flex flex-col gap-5">
      <InputCategory data={categories} />
      <InputDescription />
      <InputValue />
      <InputRecurrency />
      <footer className="flex justify-end gap-5">
        <Link href="/expense">
          <Button type="button" variant="faded">
            Cancelar
          </Button>
        </Link>
        <ButtonSubmit title="Gravar" color="success" />
      </footer>
    </form>
  )
}
