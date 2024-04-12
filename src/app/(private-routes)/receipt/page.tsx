import { getReceipts } from '@/actions'
import { PageTitle } from '@/components/PageTitle'
import { Cards } from '@/components/renders/cards'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default async function ReceiptPage() {
  const receipts = await getReceipts()

  return (
    <>
      <div className="flex items-center justify-between">
        <PageTitle title="Gerenciar Receitas" />
        <Link href="/receipt/new">
          <Button color="success">Cadastrar</Button>
        </Link>
      </div>
      <Cards data={{ receipts }} />
    </>
  )
}
