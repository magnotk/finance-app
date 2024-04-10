import { Button as ButtonCustom } from '@nextui-org/react'

interface Props {
  title: string
}

export default function Button({ title }: Props) {
  return (
    <ButtonCustom variant="faded" className="h-12 w-full">
      {title}
    </ButtonCustom>
  )
}
