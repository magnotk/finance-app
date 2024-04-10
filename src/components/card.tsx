interface Props {
  type: 'payment' | 'receipt'
}

export default function Card({ type }: Props) {
  const title = type === 'payment' ? 'Pagamentos' : 'Recebimentos'

  return (
    <section className="mx-auto flex max-w-lg items-center justify-center rounded-md bg-neutral-500 text-neutral-100 shadow">
      <h1 className="p-2">{title}</h1>
    </section>
  )
}
