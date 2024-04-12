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