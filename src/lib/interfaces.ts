import {
  Expense,
  ExpenseCategory,
  Receipt,
  ReceiptCategory,
} from '@prisma/client'

export interface ExpenseWithCategories extends Expense {
  category: ExpenseCategory
}

export interface ReceiptWithCategories extends Receipt {
  category: ReceiptCategory
}
