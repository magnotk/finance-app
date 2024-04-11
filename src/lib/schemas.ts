import { z } from 'zod'

const parseValue = (value: string) =>
  parseFloat(value.replace('R$', '').replace('.', '').replace(',', '.'))

export const ExpenseSchema = z.object({
  category: z.string(),
  description: z.string().min(1, 'Informe a descrição'),
  value: z
    .string()
    .min(1, 'Informe o valor')
    .refine((val) => {
      const parsedValue = parseValue(val)
      return !isNaN(parsedValue)
    }, 'Valor inválido')
    .transform((val) => parseValue(val)),
  recurrency: z
    .string()
    .min(1, 'Informe a quantidade de lançamentos')
    .refine((val) => {
      return !isNaN(Number(val))
    }, 'Recorrência inválida')
    .transform((val) => Number(val)),
})

export const ReceiptSchema = z.object({
  category: z.string(),
  description: z.string().min(1, 'Informe a descrição'),
  value: z
    .string()
    .min(1, 'Informe o valor')
    .refine((val) => {
      const parsedValue = parseValue(val)
      return !isNaN(parsedValue)
    }, 'Valor inválido')
    .transform((val) => parseValue(val)),
  recurrency: z
    .string()
    .min(1, 'Informe a quantidade de lançamentos')
    .refine((val) => {
      return !isNaN(Number(val))
    }, 'Recorrência inválida')
    .transform((val) => Number(val)),
})
