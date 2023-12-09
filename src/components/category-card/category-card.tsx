import { AspectRatio, Box, Flex, Image, Text } from '@chakra-ui/react'

export interface CategoryCardProps {
  id: number
  name: string
  imgCrs: string
}

export const CategoryCard = ({ id, imgCrs, name }: CategoryCardProps) => (
  <Flex key={id} w="full" rounded="lg" position="relative" justifyContent="center">
    <AspectRatio w="full" ratio={4 / 3}>
      <Image src={imgCrs} rounded="lg" />
    </AspectRatio>
    <Box
      bgGradient="linear(transparent,transparent, blackAlpha.700)"
      position="absolute"
      rounded="lg"
      inset={0}
    />
    <Text fontSize="2xl" position="absolute" bottom="5%" fontWeight="bold" color="white">
      {name}
    </Text>
  </Flex>
)
