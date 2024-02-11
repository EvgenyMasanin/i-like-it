import {
  AspectRatio,
  Avatar,
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'

import { Path, root } from '~/shared/paths'
import { MemberDto } from '~/entities/member/model/types/member.interface'

import { Link } from 'react-router-dom'

import { Characteristic } from '../characteristic'
import { LikeMemberButton } from '../like-member/ui'

export interface MemberCardProps extends MemberDto {}

export const MemberCard = ({
  id,
  gallery,
  name,
  authorAvatarURL,
  authorId,
  description,
  characteristics,
}: MemberCardProps) => {
  const getApiImage = (path: string | undefined) => (path ? `http://localhost:5000/${path}` : '')

  const mainImage = gallery.find((image) => image.isMain)?.imageUrl

  return (
    <Card maxW={{ base: 'min-content', sm: 'max-content' }}>
      <CardBody>
        <AspectRatio ratio={4 / 3}>
          <Image src={getApiImage(mainImage)} alt={name} borderRadius="lg" />
        </AspectRatio>
        <Box position="relative">
          <Avatar
            as={Link}
            to={root(Path.profile, `${authorId}`)}
            position="absolute"
            left="50%"
            top="-30px"
            transform="translateX(-50%)"
            size="lg"
            src={getApiImage(authorAvatarURL)}
          />
        </Box>
        <Stack mt="6" spacing="3">
          <Heading size="md" textTransform="capitalize">
            {name}
          </Heading>
          <Text noOfLines={1}>{description}</Text>
          <Divider />
          <Heading size="md" textTransform="capitalize">
            Characteristics:
          </Heading>
          <Flex gap={4} alignItems="center">
            <Characteristic
              key={characteristics[1].id}
              name={characteristics[1].name}
              rating={characteristics[1].rating}
            />
            {characteristics.length > 1 && (
              <Badge variant="solid">and {characteristics.length - 1} more...</Badge>
            )}
          </Flex>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter position="relative">
        <LikeMemberButton
          memberId={id}
          position="absolute"
          left="50%"
          top="-20px"
          transform="translateX(-50%)"
        />
      </CardFooter>
    </Card>
  )
}
