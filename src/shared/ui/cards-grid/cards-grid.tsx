import { useScroll } from 'framer-motion'
import { Box, SimpleGrid } from '@chakra-ui/react'

import { PropsWithChildren, useRef } from 'react'

import { TopButton } from '../top-button/ui'

export interface CardsGridProps extends PropsWithChildren {}

export const CardsGrid = ({ children }: CardsGridProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({ container: ref, layoutEffect: false })

  const handleClick = () => {
    ref.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <TopButton scrollY={scrollY} handleClick={handleClick} />
      <Box ref={ref} as="article" pt={4} pb="1" flexGrow={1}>
        <SimpleGrid
          minChildWidth={{ base: 'none', md: 250 }}
          columnGap={10}
          rowGap={10}
          justifyItems="center"
          columns={1}
          pr={{
            base: 3,
            lg: 0,
          }}
        >
          {children}
        </SimpleGrid>
      </Box>
    </>
  )
}
