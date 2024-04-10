import { Input as InputCustom } from '@nextui-org/react'

interface Props {
  name: string
  label: string
}

export default function Input({ label, name }: Props) {
  return <InputCustom variant="faded" label={label} name={name} />
}
