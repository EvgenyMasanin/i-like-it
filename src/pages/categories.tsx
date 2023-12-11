/* eslint-disable no-nested-ternary */
import { useRef } from 'react'
import { Box, Hide, SimpleGrid } from '@chakra-ui/react'
import { useScroll } from 'framer-motion'
import { CategoryCard } from 'src/components/category-card'
import { Search } from 'src/components/search'
import { TopButton } from 'src/components/top-button'

interface Category {
  id: number
  name: string
  description: string
  imgCrs: string
}

const categories: Array<Category> = Array(130)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: `Category name ${i}`,
    description: `Description number ${i}`,
    imgCrs:
      i % 2 === 0
        ? 'https://plus.unsplash.com/premium_photo-1701083991041-16b72d10d2b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        : i % 3 === 1
        ? 'https://plus.unsplash.com/premium_photo-1701185652357-e9632c2b5969?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        : 'https://images.unsplash.com/photo-1700284290242-855332aa31e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }))

export const Categories = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({ container: ref })

  const handleClick = () => {
    ref.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <>
      <TopButton scrollY={scrollY} handleClick={handleClick} />
      <Box ref={ref} as="article" pt={4} pb="1" flexGrow={1} overflow="auto">
        <SimpleGrid
          minChildWidth={{ base: 'none', md: 250 }}
          columnGap={5}
          rowGap={10}
          justifyItems="center"
          columns={1}
          pr={{
            base: 3,
            lg: 0,
          }}
        >
          <Hide above="md">
            <Search />
          </Hide>
          {categories.map((props) => (
            <CategoryCard {...props} key={props.name} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  )
}
