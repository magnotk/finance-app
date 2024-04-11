export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="px-2 py-10 md:px-5">{children}</div>
}
