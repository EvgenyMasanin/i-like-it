import { Hide } from '@chakra-ui/react'

import { CardsGrid } from '~/shared/ui'
import { Path } from '~/shared/paths'
import { Search } from '~/features/search/ui'
import { CategoryCard } from '~/entities/category/ui/category-card'
import { useFindAllCategoriesQuery } from '~/entities/category/api/category.api'

import { Outlet, useLocation } from 'react-router-dom'

export const Categories = () => {
  const { pathname } = useLocation()

  const { data, isError } = useFindAllCategoriesQuery({ limit: 10, offset: 0 })

  if (isError) return 'error'

  if (pathname !== `/${Path.categories}`) {
    return <Outlet />
  }

  const categories = data?.data

  return (
    <CardsGrid key="categories-page">
      <Hide above="md">
        <Search />
      </Hide>

      {categories?.map((props) => (
        <CategoryCard {...props} key={props.id} />
      ))}
    </CardsGrid>
  )
}
