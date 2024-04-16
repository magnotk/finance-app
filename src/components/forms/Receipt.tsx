'use client'

import { Button } from '@nextui-org/react'
import { ButtonSubmit } from '../ButtonSubmit'
import Link from 'next/link'
import { ReceiptCategory } from '@prisma/client'
import { InputCategory } from '../inputs/Category'
import { InputDescription } from '../inputs/Description'
import { InputValue } from '../inputs/Value'
import { InputRecurrency } from '../inputs/Recurrency'
import { useFormState } from 'react-dom'
import { createReceipt } from '@/actions'

interface Props {
  categories: ReceiptCategory[]
}

export function ReceiptForm({ categories }: Props) {
  const [formState, action] = useFormState(createReceipt, { errors: {} })

  return (
    <form action={action} className="flex flex-col gap-5">
      <InputCategory data={categories} />
      <InputDescription state={formState?.errors.description} />
      <InputValue state={formState?.errors.value} />
      <InputRecurrency state={formState?.errors.recurrency} />
      <footer className="flex justify-end gap-5">
        <Link href="/receipt">
          <Button type="button" variant="faded">
            Cancelar
          </Button>
        </Link>
        <ButtonSubmit title="Gravar" color="success" />
      </footer>
    </form>
  )
}
