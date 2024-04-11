import { getExpensesCategory } from '@/actions'
import { PageTitle } from '@/components/PageTitle'
import { ExpenseForm } from '@/components/forms/Expense'

export default async function NewExpensePage() {
  const expenseCategory = await getExpensesCategory()

  return (
    <>
      <PageTitle title="Cadastrar Despesa" />
      <ExpenseForm categories={expenseCategory} />
    </>
  )
}
