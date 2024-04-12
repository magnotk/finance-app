import { getExpensesCategory, getReceiptsCategory } from '@/actions'
import { PageTitle } from '@/components/PageTitle'
import { RenderCategoryList } from '@/components/RenderCategoryList'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default async function CategoryPage() {
  const [expenses, receipts] = await Promise.all([
    getExpensesCategory(),
    getReceiptsCategory(),
  ])

  return (
    <>
      <div className="flex items-center justify-between">
        <PageTitle title="Gerenciar Categorias" />
        <Link href="/category/new">
          <Button color="success">Cadastrar</Button>
        </Link>
      </div>
      <RenderCategoryList title="Categorias de Despesas" data={expenses} />
      <RenderCategoryList title="Categorias de Receitas" data={receipts} />
    </>
  )
}
