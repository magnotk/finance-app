import Navbar from '@/components/Navbar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <main className="p-4 md:p-6">{children}</main>
    </>
  )
}
