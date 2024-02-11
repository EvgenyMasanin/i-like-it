import { Hide, Spinner } from '@chakra-ui/react'

import { CardsGrid } from '~/shared/ui'
import { Path } from '~/shared/paths'
import { Search } from '~/features/search/ui'
import { CategoryCard } from '~/entities/category/ui/category-card'
import { useLoading, useTypedLoaderData } from '~/shared/hooks/react-router-dom'
import { CategoryDto } from '~/entities/category/model/types/category.interface'

import { Outlet, useLocation } from 'react-router-dom'

export const Categories = () => {
  const { pathname } = useLocation()

  const categories = useTypedLoaderData<CategoryDto[]>()

  const isLoading = useLoading()
  if (isLoading) return <Spinner />

  if (pathname !== `/${Path.categories}`) {
    return <Outlet />
  }

  return (
    <CardsGrid>
      <Hide above="md">
        <Search />
      </Hide>
      {categories.map((props) => (
        <CategoryCard {...props} key={props.name} />
      ))}
    </CardsGrid>
  )
}
