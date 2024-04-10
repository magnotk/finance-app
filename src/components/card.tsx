interface Props {
  type: 'payment' | 'receipt'
}

export default function Card({ type }: Props) {
  const title = type === 'payment' ? 'Pagamentos' : 'Recebimentos'

  return (
    <section className="my-2 w-full rounded-md bg-neutral-200 shadow md:m-2">
      <h1 className="mb-2 p-2 text-center font-medium">{title}</h1>
    </section>
  )
}
