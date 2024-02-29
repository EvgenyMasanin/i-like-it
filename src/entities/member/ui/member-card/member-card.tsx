import { Avatar, Heading, Image, Text } from '@chakra-ui/react'

import { getUrl } from '~/shared/lib'
import { Path, root } from '~/shared/paths'
import { CharacteristicsPreview } from '~/entities/member/ui'
import { MemberDto } from '~/entities/member/model/types/member.interface'

import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { MemberCardCompose } from './member-card-compose'

export interface MemberCardProps extends MemberDto {
  likeButton: ReactNode
}

export const MemberCard = ({
  // id,
  gallery,
  name,
  authorAvatarURL,
  authorId,
  description,
  characteristics,
  likesCount,
  likeButton,
}: MemberCardProps) => {
  const getApiImage = (path: string | undefined) => (path ? `http://localhost:5000/${path}` : '')

  const mainImage = gallery.find((image) => image.isMain)?.imageUrl ?? ''

  const src = mainImage
    ? getUrl(mainImage)
    : 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=5aen6wD1rsiMZSaVeJ9BWM4GGh5LE_9h97haNpUQN5I='

  return (
    <MemberCardCompose
      avatar={
        <Avatar
          as={Link}
          to={root(Path.profile, `${authorId}`)}
          src={getApiImage(authorAvatarURL)}
          size="lg"
        />
      }
      name={
        <Heading size="md" textTransform="capitalize">
          {name}
        </Heading>
      }
      description={<Text noOfLines={1}>{description}</Text>}
      image={<Image src={src} alt={name} borderRadius="lg" />}
      characteristics={
        <>
          <Heading size="md" textTransform="capitalize">
            Characteristics:
          </Heading>
          <CharacteristicsPreview characteristics={characteristics} />
        </>
      }
      likeButton={likeButton}
      likes={<Text>{likesCount} people like it!</Text>}
    />
  )
}
