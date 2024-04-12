export const currencyBRL = (value: number) =>
  value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
