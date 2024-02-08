import { CardsGrid } from '@shared/ui'
import { Path } from '@shared/paths'
import { Search } from '@features/search/ui'
import { Hide, Spinner } from '@chakra-ui/react'
import { CategoryCard } from '@entities/category/ui/category-card'
import { Category } from '@entities/category/types/category.type'
import { useLoading, useTypedLoaderData } from '@shared/hooks/react-router-dom'

/* eslint-disable no-nested-ternary */
import { Outlet, useLocation } from 'react-router-dom'

export const Categories = () => {
  const { pathname } = useLocation()

  const categories = useTypedLoaderData<Category[]>()

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
