export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto px-2 py-10 md:px-5 lg:max-w-[60%]">{children}</div>
  )
}
