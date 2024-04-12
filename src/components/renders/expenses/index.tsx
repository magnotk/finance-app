import { PageTitle } from '@/components/PageTitle'
import { ExpenseWithCategories } from '@/lib/interfaces'
import { MonthToString } from '@/utils/monthToString'

interface Props {
  data: ExpenseWithCategories[]
}

export function RenderExpenseList({ data }: Props) {
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
          <p key={expense.id}>{expense.description}</p>
        ))}
      </>
    )
  }

  return (
    <div className="my-5">
      {Object.keys(groupedExpenses).map((month) => (
        <section
          key={month}
          className="my-2 rounded-lg border border-neutral-500 bg-neutral-100 p-2 dark:bg-neutral-800"
        >
          <PageTitle title={MonthToString[parseInt(month)].label} />
          {Object.keys(groupedExpenses[month]).map((category) => (
            <div key={category}>
              <h3>{category}</h3>
              <RenderExpenses data={groupedExpenses[month][category]} />
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}
