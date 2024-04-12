import { PageTitle } from '@/components/PageTitle'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default function ExpensePage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <PageTitle title="Gerenciar Despesas" />
        <Link href="/expense/new">
          <Button color="success">Cadastrar</Button>
        </Link>
      </div>
    </>
  )
}