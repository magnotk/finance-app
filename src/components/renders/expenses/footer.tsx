import { currencyBRL } from '@/utils/currencyBRL'

interface Props {
  month: string
  sum: number
}

export function Footer({ month, sum }: Props) {
  return (
    <footer className="flex justify-between border-t-2 border-neutral-500 py-3">
      <span>Total de despesas em {month}: </span>
      <span>{currencyBRL(sum)}</span>
    </footer>
  )
}
