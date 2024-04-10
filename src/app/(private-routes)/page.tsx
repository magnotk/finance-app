import Card from '@/components/card'

export default function Home() {
  return (
    <main className="mt-5 space-y-5">
      <Card type="payment" />
      <Card type="receipt" />
    </main>
  )
}
