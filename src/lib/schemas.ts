import { z } from 'zod'

const parseValue = (value: string) =>
  parseFloat(value.replace('R$', '').replace('.', '').replace(',', '.'))

export const ExpenseSchema = z.object({
  category: z.string().refine((val) => {
    if (!val) return false
  }, 'Selecione a categoria'),
  description: z.string().min(1, 'Informe a descrição'),
  value: z
    .string()
    .refine((val) => {
      const parsedValue = parseValue(val)
      return !isNaN(parsedValue)
    }, 'Informe o valor')
    .transform((val) => parseValue(val)),
  recurrency: z
    .string()
    .nullable()
    .refine((val) => {
      if (isNaN(Number(val)) || !val) return false
    }, 'Selecione a recorrência')
    .transform((val) => Number(val)),
})

export const ReceiptSchema = z.object({
  category: z.string().refine((val) => {
    if (!val) return false
  }, 'Selecione a categoria'),
  description: z.string().min(1, 'Informe a descrição'),
  value: z
    .string()
    .refine((val) => {
      const parsedValue = parseValue(val)
      return !isNaN(parsedValue)
    }, 'Informe o valor')
    .transform((val) => parseValue(val)),
  recurrency: z
    .string()
    .nullable()
    .refine((val) => {
      if (isNaN(Number(val)) || !val) return false
    }, 'Selecione a recorrência')
    .transform((val) => Number(val)),
})

export const CategorySchema = z.object({
  description: z.string().min(1, 'Informe a descrição'),
  type: z.enum(['expense', 'receipt']),
})
