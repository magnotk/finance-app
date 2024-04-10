import Card from '@/components/card'

export default function Home() {
  return (
    <main className="flex flex-col px-2 py-10 md:flex-row md:px-5">
      <Card type="payment" />
      <Card type="receipt" />
    </main>
  )
}
