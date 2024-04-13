'use server'

import { prisma } from '@/lib/prisma'
import { CategorySchema, ExpenseSchema } from '@/lib/schemas'
import {
  CategoryFormState,
  ExpenseFormState,
  ReceiptFormState,
} from '@/lib/states'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { randomUUID } from 'node:crypto'

export async function getExpenses() {
  return prisma.expense.findMany({ include: { category: true } })
}

export async function getReceipts() {
  return prisma.receipt.findMany({ include: { category: true } })
}

export async function getExpensesCategory() {
  return prisma.expenseCategory.findMany({ orderBy: { description: 'asc' } })
}

export async function getReceiptsCategory() {
  return prisma.receiptCategory.findMany({ orderBy: { description: 'asc' } })
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
    return { errors: parsed.error.flatten().fieldErrors }
  }

  const data = []
  const recurrency = parsed.data.recurrency
  let referenceMonth = new Date().getMonth()
  const uuid = randomUUID()

  for (let i = 1; i <= recurrency; i++) {
    data.push({
      category_id: parsed.data.category,
      description: parsed.data.description,
      value: parsed.data.value,
      month: referenceMonth,
      uuid,
    })
    referenceMonth++
  }

  await prisma.expense.createMany({ data })

  revalidatePath('/')
  redirect('/expense')
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

  const data = []
  const recurrency = parsed.data.recurrency
  let referenceMonth = new Date().getMonth()
  const uuid = randomUUID()

  for (let i = 1; i <= recurrency; i++) {
    data.push({
      category_id: parsed.data.category,
      description: parsed.data.description,
      value: parsed.data.value,
      month: referenceMonth,
      uuid,
    })
    referenceMonth++
  }

  await prisma.receipt.createMany({ data })

  revalidatePath('/')
  redirect('/receipt')
}

export async function createCategory(
  formState: CategoryFormState,
  formData: FormData,
): Promise<CategoryFormState> {
  const parsed = CategorySchema.safeParse({
    description: formData.get('description'),
    type: formData.get('type'),
  })

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors }
  }

  if (parsed.data.type === 'expense') {
    await prisma.expenseCategory.create({
      data: { description: parsed.data.description },
    })
  }

  if (parsed.data.type === 'receipt') {
    await prisma.receiptCategory.create({
      data: { description: parsed.data.description },
    })
  }

  revalidatePath('/')
  redirect('/category')
}

export async function deleteCategory(id: string) {
  const [expenseCategory, receiptCategory] = await Promise.all([
    prisma.expenseCategory.findFirst({ where: { id } }),
    prisma.receiptCategory.findFirst({ where: { id } }),
  ])

  if (!expenseCategory && !receiptCategory) return

  if (expenseCategory) {
    await prisma.expenseCategory.delete({ where: { id } })
  } else if (receiptCategory) {
    await prisma.receiptCategory.delete({ where: { id } })
  }

  return revalidatePath('/')
}
