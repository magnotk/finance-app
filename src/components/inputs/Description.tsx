import { Input } from '@nextui-org/react'

interface Props {
  state?: string[]
}

export function InputDescription({ state }: Props) {
  return (
    <Input
      label="Descrição"
      name="description"
      isInvalid={!!state}
      errorMessage={state}
    />
  )
}
