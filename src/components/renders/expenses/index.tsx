import { PageTitle } from '@/components/PageTitle'
import { ExpenseWithCategories } from '@/lib/interfaces'
import { MonthToString } from '@/utils/monthToString'
import Link from 'next/link'

interface Props {
  data: ExpenseWithCategories[]
}

export function RenderExpenseList({ data }: Props) {
  const currentMonth = new Date().getMonth()
  const active = (month: number) => month === currentMonth

  const groupedExpenses: {
    [key: string]: { [key: string]: ExpenseWithCategories[] }
  } = {}

  data.forEach((expense) => {
    const { month, category } = expense

    if (!groupedExpenses[month]) {
      groupedExpenses[month] = {}
    }

    if (!groupedExpenses[month][category.description]) {
      groupedExpenses[month][category.description] = []
    }

    groupedExpenses[month][category.description].push(expense)
  })

  const RenderExpenses = ({ data }: Props) => {
    return (
      <>
        {data.map((expense) => (
          <Link
            href={`/expense/${expense.id}`}
            className="my-2 flex items-center justify-between rounded-lg p-2 hover:bg-neutral-300 dark:hover:bg-neutral-700"
          >
            <span className="w-1/3">{expense.description}</span>
            <span className="w-1/3">
              {expense.value.toLocaleString('pt-br', {
                currency: 'BRL',
                style: 'currency',
              })}
            </span>
            <span className="w-1/3">{expense.status}</span>
          </Link>
        ))}
      </>
    )
  }

  return (
    <div className="my-5">
      {Object.keys(groupedExpenses).map((month) => (
        <section
          key={month}
          className={`my-5 rounded-lg bg-neutral-100 p-2 dark:bg-neutral-800 ${active(parseInt(month)) ? 'border-2 border-neutral-800 shadow dark:border-white' : 'border border-neutral-500'}`}
        >
          <PageTitle title={MonthToString[parseInt(month)].label} />
          {Object.keys(groupedExpenses[month]).map((category) => (
            <div key={category}>
              <h3 className="my-1.5 flex justify-between border-b border-neutral-500 text-sm font-medium text-emerald-700 dark:text-emerald-600">
                {category}
                <span>R$ 1.500,90</span>
              </h3>
              <RenderExpenses data={groupedExpenses[month][category]} />
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}
