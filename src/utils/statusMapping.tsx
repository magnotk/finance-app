import { Chip } from '@nextui-org/react'

export const statusMapping = {
  CURRENT: <Chip>Em dia</Chip>,
  LATE: <Chip color="warning">Em atraso</Chip>,
  PAID: <Chip color="success">Pago</Chip>,
}
