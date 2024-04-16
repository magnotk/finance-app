'use client'

import { currencyBRL } from '@/utils/currencyBRL'
import { MonthToString } from '@/utils/monthToString'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

export function AnnualHistory({
  history,
}: {
  history: ({ month: number; expense: number; receipt: number } | undefined)[]
}) {
  const Month = ({
    month,
    expense,
    receipt,
  }: {
    month: number
    expense: number
    receipt: number
  }) => (
    <div className="flex items-center">
      <div
        className={`mx-2 h-2 w-2 rounded-full ${expense > receipt ? 'bg-orange-500' : expense < receipt ? 'bg-green-500' : 'bg-white'}`}
      />
      <span>{MonthToString[month].label}</span>
    </div>
  )

  const Expenses = ({ total }: { total?: number }) => (
    <div className="mx-2 flex items-center">
      <BiChevronUp size={20} className="text-orange-500" />
      <span className="text-sm">{currencyBRL(total || 0)}</span>
    </div>
  )

  const Receipts = ({ total }: { total?: number }) => (
    <div className="mx-2 flex items-center">
      <BiChevronDown size={20} className="text-green-500" />
      <span className="text-sm">{currencyBRL(total || 0)}</span>
    </div>
  )

  return (
    <div className="my-5 flex flex-col gap-1 overflow-x-auto rounded-lg border border-neutral-500 bg-neutral-200 px-1 py-2 dark:bg-neutral-800">
      {history.map((item) => (
        <div className="grid grid-cols-3">
          {item?.month && (
            <Month
              month={item.month}
              expense={item.expense}
              receipt={item.receipt}
            />
          )}
          <Receipts total={item?.receipt} />
          <Expenses total={item?.expense} />
        </div>
      ))}
    </div>
  )
}
