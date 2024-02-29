import { AspectRatio, Box, Flex, Image, Text } from '@chakra-ui/react'

import { getUrl } from '~/shared/lib'
import { Path } from '~/shared/paths'

import { Link } from 'react-router-dom'

export interface CategoryCardProps {
  id: number
  name: string
  imageUrl: string
}

export const CategoryCard = ({ id, imageUrl: imgCrs, name }: CategoryCardProps) => (
  <Flex
    rounded="lg"
    position="relative"
    justifyContent="center"
    as={Link}
    to={`${Path.category}/${id}`}
    w="full"
    maxW="lg"
  >
    <AspectRatio w="full" ratio={4 / 3}>
      <Image src={getUrl(imgCrs)} rounded="lg" />
    </AspectRatio>
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
    rounded="lg"
    inset={0}
  />
)
