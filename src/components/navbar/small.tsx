import Icons from './items'

export default function NavbarSmall() {
  return (
    <nav className="fixed bottom-0 flex h-20 w-full items-center space-x-2 overflow-y-hidden overflow-x-scroll text-nowrap bg-neutral-950/20 p-2 md:hidden">
      <Icons />
    </nav>
  )
}
