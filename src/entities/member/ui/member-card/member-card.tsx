import { Avatar, Heading, Text } from '@chakra-ui/react'

import { getUrl } from '~/shared/lib'
import { LazyImage } from '~/shared/ui'
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
  gallery,
  name,
  authorAvatarURL,
  authorId,
  description,
  characteristics,
  likesCount,
  likeButton,
}: MemberCardProps) => {
  const mainImageUrl = gallery.find((image) => image.isMain)?.imageUrl ?? ''

  return (
    <MemberCardCompose
      avatar={
        <Avatar
          as={Link}
          to={root(Path.profile, `${authorId}`)}
          src={getUrl(authorAvatarURL)}
          size="lg"
        />
      }
      name={
        <Heading size="md" textTransform="capitalize">
          {name}
        </Heading>
      }
      description={<Text noOfLines={1}>{description}</Text>}
      image={<LazyImage src={getUrl(mainImageUrl)} alt={name} />}
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
