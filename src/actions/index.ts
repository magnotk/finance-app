'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

// ##################### CREATE ######################
export async function createExpense() {
  await prisma.expense.create({
    data: {
      value: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
      expires: new Date(),
      category_id: 'abc123',
    },
  })

  revalidatePath('/')
}

export async function createReceipt() {
  await prisma.receipt.create({
    data: {
      value: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
      status: false,
      category_id: 'abc123',
    },
  })

  revalidatePath('/')
}

// ##################### READ ########################
export async function getExpense() {
  return prisma.expense.findMany()
}

export async function getReceipt() {
  return prisma.receipt.findMany()
}

export async function getLateExpenses() {
  return prisma.expense.findMany({
    where: { status: 'LATE' },
  })
}

// ##################### UPDATE ######################
export async function updateExpense() {}

export async function updateReceipt() {}

// ##################### DELETE ######################
export async function deleteExpense() {}

export async function deleteReceipt() {}
