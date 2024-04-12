'use client'

import { FaWindowClose } from 'react-icons/fa'
import { PageTitle } from './PageTitle'
import { deleteCategory } from '@/actions'
import { toast } from 'sonner'

interface Props {
  data: Record<string, string>[]
  title: string
}

export function RenderCategoryList({ data, title }: Props) {
  const onDelete = async (id: string, title: string) => {
    const confirmation = confirm(`Apagar a categoria ${title}?`)
    if (confirmation) {
      toast.promise(deleteCategory(id), {
        loading: 'Aguarde...',
        success: `Categoria ${title} excluída.`,
        error: 'Ocorreu um erro, tente novamente.',
      })
    }
  }

  function ListItem({ id, description }: { id: string; description: string }) {
    return (
      <span
        key={id}
        className="mb-2 flex items-center justify-between gap-2 rounded-lg border border-neutral-500 p-1.5 shadow"
      >
        {description}{' '}
        {
          <FaWindowClose
            className="cursor-pointer text-orange-500"
            onClick={() => onDelete(id, description)}
          />
        }
      </span>
    )
  }

  return (
    <div className="mx-auto my-5 flex max-w-lg flex-col gap-2.5 rounded-2xl border border-neutral-500 bg-neutral-200 p-2 shadow-md dark:bg-neutral-800">
      <PageTitle title={title} />
      <div className="flex flex-col">
        {data.length ? (
          data.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              description={item.description}
            />
          ))
        ) : (
          <p className="p-2.5 text-center opacity-60">
            Nenhum registro encontrado
          </p>
        )}
      </div>
    </div>
  )
}
