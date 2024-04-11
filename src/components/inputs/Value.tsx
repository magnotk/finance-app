import { Input } from '@nextui-org/react'
import { NumericFormat } from 'react-number-format'

export function InputValue() {
  return (
    <NumericFormat
      prefix="R$ "
      customInput={Input}
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      fixedDecimalScale
      placeholder="R$ 0,00"
      name="value"
    />
  )
}
