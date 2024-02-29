import { Hide } from '@chakra-ui/react'

import { CardsGrid } from '~/shared/ui'
import { Path } from '~/shared/paths'
import { Search } from '~/features/search/ui'
import { CategoryCardSkeleton } from '~/entities/category/ui'
import { CategoryCard } from '~/entities/category/ui/category-card'
import { useFindAllCategoriesQuery } from '~/entities/category/api/category.api'

import { useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export const Categories = () => {
  const { pathname } = useLocation()

  const { data, isLoading, isError } = useFindAllCategoriesQuery({ limit: 10, offset: 0 })

  const skeletons = useRef(
    Array(5)
      .fill(0)
      .map((_, i) => <CategoryCardSkeleton key={i} />)
  )

  if (isError) return 'error'

  if (pathname !== `/${Path.categories}`) {
    return <Outlet />
  }

  const categories = data?.data

  return (
    <CardsGrid>
      <Hide above="md">
        <Search />
      </Hide>

      {isLoading
        ? skeletons.current
        : categories?.map((props) => <CategoryCard {...props} key={props.id} />)}
    </CardsGrid>
  )
}
