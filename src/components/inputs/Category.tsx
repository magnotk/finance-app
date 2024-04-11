import { Select, SelectItem } from '@nextui-org/react'

interface Props {
  data: Record<string, string>[]
  state?: string[]
}

export function InputCategory({ data, state }: Props) {
  return (
    <Select
      label="Categoria"
      name="category"
      isInvalid={!!state}
      errorMessage={state}
    >
      {data?.map((item) => (
        <SelectItem key={item.id}>{item.description}</SelectItem>
      ))}
    </Select>
  )
}
