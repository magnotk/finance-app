import { Select, SelectItem } from '@nextui-org/react'

interface Props {
  data: Record<string, string>[]
}

export function InputCategory({ data }: Props) {
  return (
    <Select label="Categoria" name="category">
      {data?.map((item) => (
        <SelectItem key={item.id}>{item.description}</SelectItem>
      ))}
    </Select>
  )
}
