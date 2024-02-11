import { Box, SimpleGrid, Text } from '@chakra-ui/react'

import { MemberCard } from '~/entities/member/ui'
import { useFindAllMembersQuery } from '~/entities/member/api'
import { CategoryDto } from '~/entities/category/model/types/category.interface'
import { useTypedLoaderData } from '~/shared/hooks/react-router-dom/use-typed-loader-data'

export interface CategoryProps {}

export const CategoryPage = () => {
  const { id, name } = useTypedLoaderData<CategoryDto>()

  const { data, error, isLoading } = useFindAllMembersQuery({ limit: 10, offset: 1 })

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
        {isLoading
          ? 'Loading...'
          : data?.data.map((member) => <MemberCard key={member.id} {...member} />)}
        {/* <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard /> */}
      </SimpleGrid>
    </Box>
  )
}
