import { Flex, SkeletonText, Stack, Text } from '@chakra-ui/react'

import { CategoryMembersSkeleton } from '~/widgets/category-members/ui'

import { ReactNode } from 'react'

interface ComposeProps {
  isLoaded: boolean | undefined
  name: string | undefined
  description: string | undefined
  author: ReactNode | undefined
  members: ReactNode | undefined
}

export const Compose = ({ name, description, author, members, isLoaded }: ComposeProps) => (
  <Stack gap={2}>
    <SkeletonText w="20%" noOfLines={1} skeletonHeight={8} isLoaded={isLoaded}>
      <Text fontSize="4xl">{name}</Text>
    </SkeletonText>
    <Flex gap={2} alignItems="end">
      <SkeletonText w="full" noOfLines={4} spacing="4" skeletonHeight="2" isLoaded={isLoaded}>
        <Text fontSize="3xl">Description: </Text>
        <Text fontSize="2xl">{description}</Text>
      </SkeletonText>
    </Flex>
    <Flex alignItems="center" gap={2}>
      <SkeletonText noOfLines={1} skeletonHeight={8} isLoaded={isLoaded}>
        <Text fontSize="3xl">Author:</Text>
      </SkeletonText>
      {author}
    </Flex>
    {isLoaded ? members : <CategoryMembersSkeleton />}
  </Stack>
)
