import { PageTitle } from '@/components/PageTitle'
import { ReceiptForm } from '@/components/forms/Receipt'

export default function NewReceiptPage() {
  return (
    <>
      <PageTitle title="Cadastrar Receita" />
      <ReceiptForm />
    </>
  )
}
