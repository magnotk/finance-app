import { getExpenses } from '@/actions'
import { PageTitle } from '@/components/PageTitle'
import { Cards } from '@/components/renders/cards'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default async function ExpensePage() {
  const expenses = await getExpenses()

  return (
    <>
      <div className="flex items-center justify-between">
        <PageTitle title="Gerenciar Despesas" />
        <Link href="/expense/new">
          <Button color="success">Cadastrar</Button>
        </Link>
      </div>
      <Cards data={{ expenses }} />
    </>
  )
}
