'use client'

import { createReceipt } from '@/actions'

export default function Receipts() {
  return (
    <>
      <p>Recebimentos</p>
      <button onClick={async () => await createReceipt()}>
        criar recebimento fake
      </button>
    </>
  )
}
