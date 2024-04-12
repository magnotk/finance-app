import { currencyBRL } from '@/utils/currencyBRL'

interface Props {
  sum: number
}

export function Footer({ sum }: Props) {
  return (
    <footer className="flex justify-between border-t-2 border-neutral-500 py-3">
      <span>Total de despesas: </span>
      <span>{currencyBRL(sum)}</span>
    </footer>
  )
}
