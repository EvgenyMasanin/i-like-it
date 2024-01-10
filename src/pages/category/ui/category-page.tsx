import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { Category } from '@entities/category/types/category.type'
import { MemberCard } from '@entities/member/ui'
import { useTypedLoaderData } from '@sheared/hooks/react-router-dom/use-typed-loader-data'

export interface CategoryProps {}

export const CategoryPage = () => {
  const { id, name } = useTypedLoaderData<Category>()

  console.log('🚀 ~ Category ~ data:')
  return (
    <Box>
      <Text fontSize="4xl">
        {name} {id}
      </Text>
      <SimpleGrid
        minChildWidth={{ base: 'none', md: 300 }}
        columnGap={5}
        rowGap={10}
        justifyItems="center"
        columns={1}
        pr={{
          base: 3,
          lg: 0,
        }}
      >
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </SimpleGrid>
    </Box>
  )
}