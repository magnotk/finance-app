import { PageTitle } from '@/components/PageTitle'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default function ReceiptPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <PageTitle title="Gerenciar Receitas" />
        <Link href="/receipt/new">
          <Button color="success">Cadastrar</Button>
        </Link>
      </div>
    </>
  )
}
