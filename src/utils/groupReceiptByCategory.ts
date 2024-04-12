import { ReceiptWithCategories } from '@/lib/interfaces'

interface Props {
  data: ReceiptWithCategories[]
}

export const groupedReceiptByCategory = ({ data }: Props) => {
  const receipts: {
    [key: string]: { [key: string]: ReceiptWithCategories[] }
  } = {}

  data.forEach((receipt) => {
    const { month, category } = receipt

    if (!receipts[month]) {
      receipts[month] = {}
    }

    if (!receipts[month][category.description]) {
      receipts[month][category.description] = []
    }

    receipts[month][category.description].push(receipt)
  })

  return receipts
}
