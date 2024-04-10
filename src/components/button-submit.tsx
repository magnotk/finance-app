import { Button as ButtonCustom } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

interface Props {
  title: string
}

export default function ButtonSubmit({ title }: Props) {
  const { pending } = useFormStatus()

  return (
    <ButtonCustom variant="faded" className="h-12 w-full" isLoading={pending}>
      {title}
    </ButtonCustom>
  )
}
