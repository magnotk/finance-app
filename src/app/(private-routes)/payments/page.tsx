'use client'

import { createExpense } from '@/actions'

export default function Payments() {
  return (
    <>
      <p>Pagamentos</p>
      <button onClick={async () => await createExpense()}>
        criar pagamento fake
      </button>
    </>
  )
}
