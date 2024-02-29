import { Skeleton, SkeletonProps } from '@chakra-ui/react'

import { CategoryCard } from '..'

export interface CategoryCardSkeletonProps extends SkeletonProps {}

export const CategoryCardSkeleton = (props: CategoryCardSkeletonProps) => (
  <Skeleton rounded="lg" w="full" maxW="lg" {...props}>
    <CategoryCard id={0} imageUrl="" name="" />
  </Skeleton>
)
