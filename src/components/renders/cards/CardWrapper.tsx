import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function CardWrapper({ children }: Props) {
  return <div className="my-5 text-sm md:text-base">{children}</div>
}
