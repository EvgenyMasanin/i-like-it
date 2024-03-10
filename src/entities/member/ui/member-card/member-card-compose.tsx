import { AspectRatio, Box, Card, CardBody, CardFooter, Divider, Stack } from '@chakra-ui/react'

import { ReactNode } from 'react'

interface MemberCardComposeProps {
  image: ReactNode
  avatar: ReactNode
  name: ReactNode
  description: ReactNode
  characteristics: ReactNode
  likeButton: ReactNode
  likes: ReactNode
}

export const MemberCardCompose = ({
  image,
  avatar,
  name,
  description,
  characteristics,
  likeButton,
  likes,
}: MemberCardComposeProps) => (
  <Card maxW="min-content">
    <CardBody>
      <AspectRatio ratio={4 / 3} rounded="lg">
        {image}
      </AspectRatio>
      <Box position="relative" mb={10}>
        <Box position="absolute" left="50%" top="-30px" transform="translateX(-50%)">
          {avatar}
        </Box>
      </Box>
      <Stack mt="6" spacing="3">
        {name}
        {description}
        <Divider />
        {characteristics}
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter position="relative" justifyContent="center">
      <Box position="absolute" left="50%" top="-20px" transform="translateX(-50%)">
        {likeButton}
      </Box>
      {likes}
    </CardFooter>
  </Card>
)
