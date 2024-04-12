import { PageTitle } from '@/components/PageTitle'
import { CategoryForm } from '@/components/forms/Category'

export default function NewCategoryPage() {
  return (
    <>
      <PageTitle title="Cadastrar Categoria" />
      <CategoryForm />
    </>
  )
}
