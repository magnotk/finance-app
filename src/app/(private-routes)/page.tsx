import { getExpense, getLateExpenses, getReceipt } from '@/actions'
import Card from '@/components/card'
import DatePicker from '@/components/date-picker'

export default async function Home() {
  const expenses = await getExpense()
  const receipts = await getReceipt()
  const expensesLate = await getLateExpenses()

  return (
    <main>
      <DatePicker />
      {/* {expensesLate.length >= 1 && <Card data={{ expensesLate }} />} */}
      <Card data={{ expensesLate }} />
      <div className="flex flex-col md:flex-row md:gap-5">
        <Card data={{ expenses }} />
        <Card data={{ receipts }} />
      </div>
    </main>
  )
}
