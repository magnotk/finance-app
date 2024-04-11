'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function DatePicker() {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <ArrowLeft className="cursor-pointer" />
      <span className="text-lg font-medium md:text-xl">
        {new Date().toLocaleDateString('pt-br', {
          month: 'long',
          year: 'numeric',
        })}
      </span>
      <ArrowRight className="cursor-pointer" />
    </div>
  )
}
