import { Button } from '@nextui-org/react'

interface Props {
  title: string
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
}

export function ButtonSubmit({ title, color }: Props) {
  return <Button color={color}>{title}</Button>
}
