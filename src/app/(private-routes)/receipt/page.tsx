import { getReceipts } from '@/actions'
import { PageTitle } from '@/components/PageTitle'
import { CardReceipt, CardWrapper } from '@/components/renders/cards'
import { groupedReceiptByCategory } from '@/utils/groupReceiptByCategory'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default async function ReceiptPage() {
  const receipts = await getReceipts()
  const groupedReceipts = groupedReceiptByCategory({ data: receipts })

  return (
    <>
      <div className="flex items-center justify-between">
        <PageTitle title="Gerenciar Receitas" />
        <Link href="/receipt/new">
          <Button color="success">Cadastrar</Button>
        </Link>
      </div>
      <CardWrapper>
        {Object.keys(groupedReceipts).map((month) => (
          <CardReceipt
            key={month}
            month={parseInt(month)}
            data={receipts}
            groupedReceipts={groupedReceipts}
          />
        ))}
      </CardWrapper>
    </>
  )
}
