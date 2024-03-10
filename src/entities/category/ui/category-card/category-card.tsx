import { Box, Flex, Text } from '@chakra-ui/react'

import { getUrl } from '~/shared/lib'
import { LazyImage } from '~/shared/ui'
import { Path } from '~/shared/paths'

import { Link } from 'react-router-dom'

export interface CategoryCardProps {
  id: number
  name: string
  imageUrl: string
}

export const CategoryCard = ({ id, imageUrl, name }: CategoryCardProps) => (
  <Flex
    rounded="lg"
    position="relative"
    justifyContent="center"
    alignItems="center"
    as={Link}
    to={`${Path.category}/${id}`}
    w="full"
    maxW="lg"
    minW={300}
    aspectRatio={4 / 3}
  >
    <LazyImage src={getUrl(imageUrl)} aspectRatio={4 / 3} />
    <Shadow />
    <Text fontSize="2xl" position="absolute" bottom="5%" fontWeight="bold" color="white">
      {name}
    </Text>
  </Flex>
)

const Shadow = () => (
  <Box
    bgGradient="linear(transparent,transparent, blackAlpha.700)"
    position="absolute"
    rounded="inherit"
    inset={0}
  />
)
