import { Recurrency } from '@/lib/recurrency'
import { Select, SelectItem } from '@nextui-org/react'

interface Props {
  state?: string[]
}

export function InputRecurrency({ state }: Props) {
  return (
    <Select
      label="Recorrência"
      name="recurrency"
      isInvalid={!!state}
      errorMessage={state}
    >
      {Recurrency.map((item) => (
        <SelectItem key={item.key}>{item.label}</SelectItem>
      ))}
    </Select>
  )
}
