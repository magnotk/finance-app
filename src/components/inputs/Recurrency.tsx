import { Recurrency } from '@/lib/recurrency'
import { Select, SelectItem } from '@nextui-org/react'

export function InputRecurrency() {
  return (
    <Select label="Recorrência">
      {Recurrency.map((item) => (
        <SelectItem key={item.key}>{item.label}</SelectItem>
      ))}
    </Select>
  )
}
