export default function LoginForm() {
  return (
    <form
      action=""
      className="m-5 flex flex-col items-center justify-center gap-5"
    >
      <div className="flex flex-col">
        <label htmlFor="email">E-mail</label>
        <input type="text" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Senha</label>
        <input type="password" />
      </div>
      <button>Entrar</button>
    </form>
  )
}
