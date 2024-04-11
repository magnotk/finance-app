'use server'

import { ExpenseSchema } from '@/lib/schemas'
import { ExpenseFormState, ReceiptFormState } from '@/lib/states'
import { ExpenseCategory, ReceiptCategory } from '@prisma/client'

export async function getExpensesCategory() {
  const expenses: ExpenseCategory[] = []
  return expenses
}

export async function getReceiptsCategory() {
  const receipts: ReceiptCategory[] = []
  return receipts
}

export async function createExpense(
  formState: ExpenseFormState,
  formData: FormData,
): Promise<ExpenseFormState> {
  const parsed = ExpenseSchema.safeParse({
    category: formData.get('category'),
    description: formData.get('description'),
    value: formData.get('value'),
    recurrency: formData.get('recurrency'),
  })

  if (!parsed.success) {
    console.log('erro', parsed.error.message)
    return { errors: parsed.error.flatten().fieldErrors }
  }

  console.log('cadastrando: ', parsed.data)

  return { errors: {} }
}

export async function createReceipt(
  formState: ReceiptFormState,
  formData: FormData,
): Promise<ReceiptFormState> {
  const parsed = ExpenseSchema.safeParse({
    category: formData.get('category'),
    description: formData.get('description'),
    value: formData.get('value'),
    recurrency: formData.get('recurrency'),
  })

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors }
  }

  console.log('cadastrando: ', parsed.data)

  return { errors: {} }
}
