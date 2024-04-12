'use client'

import { Button } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

interface Props {
  title: string
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
}

export function ButtonSubmit({ title, color }: Props) {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" color={color} isLoading={pending}>
      {title}
    </Button>
  )
}
