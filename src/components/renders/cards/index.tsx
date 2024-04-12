import { ExpenseWithCategories, ReceiptWithCategories } from '@/lib/interfaces'
import { CardWrapper } from './CardWrapper'
import { CardExpense } from './CardExpense'
import { groupedExpenseByCategory } from '@/utils/groupExpenseByCategory'
import { groupedReceiptByCategory } from '@/utils/groupReceiptByCategory'
import { CardReceipt } from './CardReceipt'

interface Props {
  data: {
    expenses?: ExpenseWithCategories[]
    receipts?: ReceiptWithCategories[]
  }
}

export function Cards({ data }: Props) {
  if (!data.expenses && !data.receipts) return null

  if (data.expenses) {
    const groupedExpenses = groupedExpenseByCategory({ data: data.expenses })

    return (
      <CardWrapper>
        {Object.keys(groupedExpenses).map((month) => (
          <CardExpense
            key={month}
            month={parseInt(month)}
            data={data.expenses!}
            groupedExpenses={groupedExpenses}
          />
        ))}
      </CardWrapper>
    )
  } else if (data.receipts) {
    const groupedReceipts = groupedReceiptByCategory({ data: data.receipts })

    return (
      <CardWrapper>
        {Object.keys(groupedReceipts).map((month) => (
          <CardReceipt
            key={month}
            month={parseInt(month)}
            data={data.receipts!}
            groupedReceipts={groupedReceipts}
          />
        ))}
      </CardWrapper>
    )
  }
}
