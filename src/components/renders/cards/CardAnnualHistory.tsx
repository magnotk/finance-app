'use client'

export function AnnualHistory({
  history,
}: {
  history: (boolean | undefined)[]
}) {
  const bgColor = (value: boolean | undefined) => {
    if (value === undefined) return
    return value
      ? 'bg-emerald-600/60 dark:bg-emerald-800/60'
      : 'bg-red-700/80 text-white dark:bg-red-800/60'
  }

  return (
    <div className="my-5 flex gap-1 overflow-x-auto rounded-lg border border-neutral-500 bg-neutral-200 px-1 py-2 dark:bg-neutral-800">
      <span
        className={`flex-1 rounded-lg border border-neutral-500 px-1 py-0.5 ${bgColor(history[0])}`}
      >
        JAN
      </span>
      <span
        className={`flex-1 rounded-lg border border-neutral-500 px-1 py-0.5 ${bgColor(history[1])}`}
      >
        FEV
      </span>
      <span
        className={`flex-1 rounded-lg border border-neutral-500 px-1 py-0.5 ${bgColor(history[2])}`}
      >
        MAR
      </span>
      <span
        className={`flex-1 rounded-lg border border-neutral-500 px-1 py-0.5 ${bgColor(history[3])}`}
      >
        ABR
      </span>
      <span
        className={`flex-1 rounded-lg border border-neutral-500 px-1 py-0.5 ${bgColor(history[4])}`}
      >
        MAI
      </span>
      <span
        className={`flex-1 rounded-lg border border-neutral-500 px-1 py-0.5 ${bgColor(history[5])}`}
      >
        JUN
      </span>
      <span
        className={`flex-1 rounded-lg border border-neutral-500 px-1 py-0.5 ${bgColor(history[6])}`}
      >
        JUL
      </span>
      <span
        className={`flex-1 rounded-lg border border-neutral-500 px-1 py-0.5 ${bgColor(history[7])}`}
      >
        AGO
      </span>
      <span
        className={`flex-1 rounded-lg border border-neutral-500 px-1 py-0.5 ${bgColor(history[8])}`}
      >
        SET
      </span>
      <span
        className={`flex-1 rounded-lg border border-neutral-500 px-1 py-0.5 ${bgColor(history[9])}`}
      >
        OUT
      </span>
      <span
        className={`flex-1 rounded-lg border border-neutral-500 px-1 py-0.5 ${bgColor(history[10])}`}
      >
        NOV
      </span>
      <span
        className={`flex-1 rounded-lg border border-neutral-500 px-1 py-0.5 ${bgColor(history[11])}`}
      >
        DEZ
      </span>
    </div>
  )
}
