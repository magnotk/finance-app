import { getReceiptsCategory } from '@/actions'
import { PageTitle } from '@/components/PageTitle'
import { ReceiptForm } from '@/components/forms/Receipt'

export default async function NewReceiptPage() {
  const receiptCategory = await getReceiptsCategory()

  return (
    <>
      <PageTitle title="Cadastrar Receita" />
      <ReceiptForm categories={receiptCategory} />
    </>
  )
}
