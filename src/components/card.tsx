import { Expense, Receipt } from '@prisma/client'

interface Props {
  data: {
    expenses?: Expense[]
    receipts?: Receipt[]
    expensesLate?: Expense[]
  }
}

export default function Card({ data }: Props) {
  const RenderExpense = ({ data }: { data: Expense[] }) => {
    return (
      <section className="flex min-h-16 flex-col items-center justify-center pb-5">
        <h1 className="mb-2 p-2 text-center font-medium">Pagamentos</h1>
        {data.length >= 1 ? (
          data.map((item) => <p key={item.id}>{item.value}</p>)
        ) : (
          <p>Nenhum registro encontrado</p>
        )}
      </section>
    )
  }

  const RenderReceipt = ({ data }: { data: Receipt[] }) => {
    return (
      <section className="flex min-h-16 flex-col items-center justify-center pb-5">
        <h1 className="mb-2 p-2 text-center font-medium">Recebimentos</h1>
        {data.length >= 1 ? (
          data.map((item) => <p key={item.id}>{item.value}</p>)
        ) : (
          <p>Nenhum registro encontrado</p>
        )}
      </section>
    )
  }

  const RenderExpenseLate = ({ data }: { data: Expense[] }) => {
    return (
      <section className="flex min-h-16 w-full flex-col items-center justify-center pb-5">
        <h1 className="mb-2 p-2 text-center font-medium">Em atraso</h1>
        {data.map((item) => (
          <p key={item.id}>{item.value}</p>
        ))}
      </section>
    )
  }

  return (
    <section className="my-2 w-full rounded-md bg-neutral-200 shadow">
      {data.expenses && <RenderExpense data={data.expenses} />}
      {data.receipts && <RenderReceipt data={data.receipts} />}
      {data.expensesLate && <RenderExpenseLate data={data.expensesLate} />}
    </section>
  )
}
