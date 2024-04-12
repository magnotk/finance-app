import { ExpenseWithCategories } from '@/lib/interfaces'
import { currencyBRL } from '@/utils/currencyBRL'
import { statusMapping } from '@/utils/statusMapping'
import Link from 'next/link'

interface Props {
  data: ExpenseWithCategories[]
  category: string
}

export function Wrapper({ data, category }: Props) {
  const totalByCategory = data.reduce((acc, item) => acc + item.value, 0)

  return (
    <>
      <h3 className="my-1.5 flex justify-between border-b border-neutral-500 text-sm font-medium text-emerald-700 dark:text-emerald-600">
        {category}
        <span>{currencyBRL(totalByCategory)}</span>
      </h3>

      {data.map((expense) => (
        <Link
          key={expense.id}
          href={`/expense/${expense.id}`}
          className="my-2 flex items-center justify-between rounded-lg p-2 hover:bg-neutral-300 dark:hover:bg-neutral-700"
        >
          <span className="w-1/3">{expense.description}</span>
          <span className="w-1/3">{currencyBRL(expense.value)}</span>
          <span className="w-1/3">{statusMapping[expense.status]}</span>
        </Link>
      ))}
    </>
  )
}
