import { getExpensesLated } from '@/actions'
import { PageTitle } from '@/components/PageTitle'
import { CardExpenseLated } from '@/components/renders/cards'
import { currencyBRL } from '@/utils/currencyBRL'

export default async function Home() {
  const expenseLated = await getExpensesLated()
  const total = expenseLated.reduce((acc, item) => acc + item.value, 0)

  return (
    <>
      {expenseLated.length >= 1 ? (
        <div className="mx-auto max-w-lg rounded-lg border-2 border-yellow-800/60 bg-yellow-400/20 p-2 dark:border-yellow-900 dark:bg-yellow-900/10">
          <PageTitle title="⚠️ Existe conta(s) em aberto." />
          {expenseLated.map((expense) => (
            <CardExpenseLated data={expense} />
          ))}
          <footer className="flex justify-between px-2">
            <span className="">Total:</span>
            <span className="">{currencyBRL(total)}</span>
          </footer>
        </div>
      ) : (
        <div className="mx-auto max-w-lg rounded-lg border-2 border-emerald-600 bg-emerald-200/60 p-2 dark:border-emerald-800 dark:bg-emerald-900/10">
          <PageTitle title="✅ As contas estão em dia!" />
        </div>
      )}
    </>
  )
}
