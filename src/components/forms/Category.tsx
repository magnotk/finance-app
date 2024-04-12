'use client'

import { Button } from '@nextui-org/react'
import { ButtonSubmit } from '../ButtonSubmit'
import Link from 'next/link'
import { InputDescription } from '../inputs/Description'
import { InputTypeCategory } from '../inputs/TypeCategory'
import { createCategory } from '@/actions'
import { useFormState } from 'react-dom'

export function CategoryForm() {
  const [formState, action] = useFormState(createCategory, { errors: {} })

  return (
    <form action={action} className="flex flex-col gap-5">
      <InputDescription state={formState?.errors.description} />
      <InputTypeCategory state={formState?.errors.type} />
      <footer className="flex justify-end gap-5">
        <Link href="/category">
          <Button type="button" variant="faded">
            Cancelar
          </Button>
        </Link>
        <ButtonSubmit title="Cadastrar" color="success" />
      </footer>
    </form>
  )
}
