import { getExpenses } from '@/actions'
import { PageTitle } from '@/components/PageTitle'
import { CardExpense, CardWrapper } from '@/components/renders/cards'
import { groupedExpenseByCategory } from '@/utils/groupExpenseByCategory'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default async function ExpensePage() {
  const expenses = await getExpenses()
  const groupedExpenses = groupedExpenseByCategory({ data: expenses })

  return (
    <>
      <div className="flex items-center justify-between">
        <PageTitle title="Gerenciar Despesas" />
        <Link href="/expense/new">
          <Button color="success">Cadastrar</Button>
        </Link>
      </div>
      <CardWrapper>
        {Object.keys(groupedExpenses).map((month) => (
          <CardExpense
            key={month}
            month={parseInt(month)}
            data={expenses}
            groupedExpenses={groupedExpenses}
          />
        ))}
      </CardWrapper>
    </>
  )
}
