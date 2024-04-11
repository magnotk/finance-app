'use server'

import { ExpenseCategory, ReceiptCategory } from '@prisma/client'

export async function getExpensesCategory() {
  const expenses: ExpenseCategory[] = []
  return expenses
}

export async function getReceiptsCategory() {
  const receipts: ReceiptCategory[] = []
  return receipts
}
