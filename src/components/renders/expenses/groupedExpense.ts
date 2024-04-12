import { ExpenseWithCategories } from '@/lib/interfaces'

interface Props {
  data: ExpenseWithCategories[]
}

export const groupedExpenseByCategory = ({ data }: Props) => {
  const expenses: {
    [key: string]: { [key: string]: ExpenseWithCategories[] }
  } = {}

  data.forEach((expense) => {
    const { month, category } = expense

    if (!expenses[month]) {
      expenses[month] = {}
    }

    if (!expenses[month][category.description]) {
      expenses[month][category.description] = []
    }

    expenses[month][category.description].push(expense)
  })

  return expenses
}
