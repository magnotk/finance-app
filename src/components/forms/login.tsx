'use client'

import ButtonSubmit from '@/components/button-submit'
import Input from '@/components/input'

export default function LoginForm() {
  return (
    <form
      action=""
      className="mx-auto flex max-w-lg flex-col items-center justify-center gap-5"
    >
      <Input label="E-mail" name="email" />
      <Input label="Senha" name="password" />
      <ButtonSubmit title="Entrar" />
    </form>
  )
}
