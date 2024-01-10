/* eslint-disable no-nested-ternary */
import { Outlet, useLocation } from 'react-router-dom'

import { Hide, Spinner } from '@chakra-ui/react'
import { Category } from '@entities/category/types/category.type'
import { CategoryCard } from '@entities/category/ui/category-card'
import { Search } from '@features/search/ui'
import { useLoading, useTypedLoaderData } from '@sheared/hooks/react-router-dom'
import { Path } from '@sheared/paths'
import { CardsGrid } from '@sheared/ui'

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
