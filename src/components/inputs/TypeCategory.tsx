import { Select, SelectItem } from '@nextui-org/react'

interface Props {
  state?: string[]
}

export function InputTypeCategory({ state }: Props) {
  return (
    <Select label="Tipo" name="type" isInvalid={!!state} errorMessage={state}>
      <SelectItem key="expense">Despesa</SelectItem>
      <SelectItem key="receipt">Receita</SelectItem>
    </Select>
  )
}
