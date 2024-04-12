import { PageTitle } from '@/components/PageTitle'
import { ReceiptWithCategories } from '@/lib/interfaces'
import { currencyBRL } from '@/utils/currencyBRL'
import { MonthToString } from '@/utils/monthToString'
import { Chip } from '@nextui-org/react'
import Link from 'next/link'

interface Props {
  month: number
  data: ReceiptWithCategories[]
  groupedReceipts: {
    [key: string]: {
      [key: string]: ReceiptWithCategories[]
    }
  }
}

interface WrapperProps {
  data: ReceiptWithCategories[]
  category: string
}

interface FooterProps {
  sum: number
}

export function CardReceipt({ month, data, groupedReceipts }: Props) {
  const currentMonth = new Date().getMonth()
  const active = (month: number) => month === currentMonth
  const totalMonthly = (month: number) =>
    data
      .filter((dt) => dt.month === month)
      .reduce((acc, item) => acc + item.value, 0)

  return (
    <section
      className={`my-5 rounded-lg bg-neutral-100 p-2 dark:bg-neutral-800 ${active(month) ? 'border-2 border-neutral-800 shadow dark:border-white' : 'border border-neutral-500'}`}
    >
      <PageTitle title={MonthToString[month].label} />
      {Object.keys(groupedReceipts[month]).map((category) => (
        <Wrapper
          key={category}
          data={groupedReceipts[month][category]}
          category={category}
        />
      ))}
      <Footer sum={totalMonthly(month)} />
    </section>
  )
}

function Wrapper({ data, category }: WrapperProps) {
  const totalByCategory = data.reduce((acc, item) => acc + item.value, 0)

  return (
    <>
      <h3 className="my-1.5 flex justify-between border-b border-neutral-500 text-sm font-medium text-emerald-700 dark:text-emerald-600">
        {category}
        <span>{currencyBRL(totalByCategory)}</span>
      </h3>

      {data.map((receipt) => (
        <Link
          key={receipt.id}
          href={`/receipt/${receipt.id}`}
          className="my-2 flex items-center justify-between rounded-lg p-2 hover:bg-neutral-300 dark:hover:bg-neutral-700"
        >
          <span className="w-1/3">{receipt.description}</span>
          <span className="w-1/3">{currencyBRL(receipt.value)}</span>
          <span className="w-1/3">
            {receipt.status ? (
              <Chip color="success">Recebido</Chip>
            ) : (
              <Chip>Em aberto</Chip>
            )}
          </span>
        </Link>
      ))}
    </>
  )
}

function Footer({ sum }: FooterProps) {
  return (
    <footer className="flex justify-between border-t-2 border-neutral-500 py-3">
      <span>Total de receita: </span>
      <span>{currencyBRL(sum)}</span>
    </footer>
  )
}
