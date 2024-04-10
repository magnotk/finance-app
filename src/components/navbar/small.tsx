import Icons from './items'

export default function NavbarSmall() {
  return (
    <nav className="absolute bottom-0 left-0 flex h-20 w-full items-center space-x-2 overflow-y-hidden overflow-x-scroll text-nowrap bg-neutral-500 p-2 md:hidden">
      <Icons />
    </nav>
  )
}
