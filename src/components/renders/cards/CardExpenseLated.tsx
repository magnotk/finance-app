import { currencyBRL } from '@/utils/currencyBRL'
import { MonthToString } from '@/utils/monthToString'
import { Expense } from '@prisma/client'
import Link from 'next/link'

interface Props {
  data: Expense
}

export function CardExpenseLated({ data }: Props) {
  return (
    <Link
      href={`/expense/${data.id}`}
      className="my-5 flex rounded-lg border border-yellow-900 bg-yellow-300/30 p-2 hover:bg-yellow-300/50 dark:bg-yellow-950/10 dark:hover:bg-yellow-900/60"
    >
      <span className="w-1/3">{data.description}</span>
      <span className="w-1/3">{MonthToString[data.month].label}</span>
      <span className="w-1/3 text-end">{currencyBRL(data.value)}</span>
    </Link>
  )
}
