import { PageTitle } from '@/components/PageTitle'
import { ExpenseWithCategories } from '@/lib/interfaces'
import { MonthToString } from '@/utils/monthToString'
import { Wrapper } from './wrapper'
import { groupedExpenseByCategory } from './groupedExpense'
import { Footer } from './footer'

interface Props {
  data: ExpenseWithCategories[]
}

export function RenderExpenseList({ data }: Props) {
  const currentMonth = new Date().getMonth()
  const active = (month: number) => month === currentMonth
  const groupedExpenses = groupedExpenseByCategory({ data })
  const totalMonthly = (month: number) =>
    data
      .filter((dt) => dt.month === month)
      .reduce((acc, item) => acc + item.value, 0)

  return (
    <div className="my-5">
      {Object.keys(groupedExpenses).map((month) => (
        <section
          key={month}
          className={`my-5 rounded-lg bg-neutral-100 p-2 dark:bg-neutral-800 ${active(parseInt(month)) ? 'border-2 border-neutral-800 shadow dark:border-white' : 'border border-neutral-500'}`}
        >
          <PageTitle title={MonthToString[parseInt(month)].label} />
          {Object.keys(groupedExpenses[month]).map((category) => (
            <Wrapper
              key={category}
              data={groupedExpenses[month][category]}
              category={category}
            />
          ))}
          <Footer
            sum={totalMonthly(parseInt(month))}
            month={MonthToString[parseInt(month)].label}
          />
        </section>
      ))}
    </div>
  )
}
