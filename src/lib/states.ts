export interface ExpenseFormState {
  errors: {
    category?: string[]
    description?: string[]
    value?: string[]
    recurrency?: string[]
    _form?: string
  }
}

export interface ReceiptFormState {
  errors: {
    category?: string[]
    description?: string[]
    value?: string[]
    recurrency?: string[]
    _form?: string
  }
}

export interface CategoryFormState {
  errors: {
    description?: string[]
    type?: string[]
    _form?: string
  }
}
