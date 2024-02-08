/* eslint-disable no-empty-pattern */
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
import { Member } from '~/entities/member/model/types/member.type'

import { Link } from 'react-router-dom'

import { Characteristic } from '../characteristic'
import { LikeMemberButton } from '../like-member/ui'

export interface MemberCardProps {}

const member: Member = {
  id: 151,
  name: 'apple',
  imgSrc:
    'https://images.unsplash.com/photo-1584306670957-acf935f5033c?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description:
    'An apple is a round, edible fruit produced by an apple tree (Malus spp., among them the domestic or orchard apple; Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found. Apples have been grown for thousands of years in Asia and Europe and were introduced to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek, and European Christian tradition.',
  characteristics: [
    { id: 143, name: 'Color', rating: 4 },
    { id: 569, name: 'Shape', rating: 5 },
    { id: 569, name: 'Ease of use', rating: 5 },
    { id: 529, name: 'Ease of use', rating: 1 },
    { id: 589, name: 'Ease of use', rating: 3 },
  ],
  authorId: 1267,
  authorImgSrc:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}

export const MemberCard = ({}: MemberCardProps) => (
  <Card maxW={{ base: 'min-content', sm: 'max-content' }}>
    <CardBody>
      <AspectRatio ratio={4 / 3}>
        <Image src={member.imgSrc} alt={member.name} borderRadius="lg" />
      </AspectRatio>
      <Box position="relative">
        <Avatar
          as={Link}
          to={root(Path.profile, member.authorId.toString())}
          position="absolute"
          left="50%"
          top="-30px"
          transform="translateX(-50%)"
          size="lg"
          src={member.authorImgSrc}
        />
      </Box>
      <Stack mt="6" spacing="3">
        <Heading size="md" textTransform="capitalize">
          {member.name}
        </Heading>
        <Text noOfLines={1}>{member.description}</Text>
        <Divider />
        <Heading size="md" textTransform="capitalize">
          Characteristics:
        </Heading>
        <Flex gap={4} alignItems="center">
          <Characteristic
            key={member.characteristics[0].id}
            name={member.characteristics[0].name}
            rating={member.characteristics[0].rating}
          />
          {member.characteristics.length > 1 && (
            <Badge variant="solid">and {member.characteristics.length - 1} more...</Badge>
          )}
        </Flex>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter position="relative">
      <LikeMemberButton
        memberId={member.id}
        position="absolute"
        left="50%"
        top="-20px"
        transform="translateX(-50%)"
      />
    </CardFooter>
  </Card>
)
