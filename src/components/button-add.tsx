import { Plus } from 'lucide-react'
import Link from 'next/link'

interface Props {
  type: 'payments' | 'receipts'
}

export default function ButtonAdd({ type }: Props) {
  return (
    <Link
      href={`/${type}`}
      className="mx-auto cursor-pointer items-center justify-center border p-2 text-neutral-600"
    >
      <Plus />
    </Link>
  )
}
