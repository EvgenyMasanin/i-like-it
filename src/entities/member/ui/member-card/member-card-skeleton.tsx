import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

import { CharacteristicsPreview } from '..'
import { MemberCardCompose } from './member-card-compose'

export interface MemberCardSkeletonProps {}

export const MemberCardSkeleton = ({}: MemberCardSkeletonProps) => (
  <MemberCardCompose
    avatar={<SkeletonCircle size="16" />}
    name={<Skeleton>Lorem</Skeleton>}
    description={
      <SkeletonText noOfLines={1} spacing="4" skeletonHeight="2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </SkeletonText>
    }
    image={<Skeleton />}
    characteristics={
      <>
        <Skeleton>Lorem</Skeleton>
        <SkeletonText mt="4" noOfLines={1} spacing="4" skeletonHeight="2">
          <CharacteristicsPreview
            characteristics={[
              { id: 1, name: 'lorem', rating: 5 },
              { id: 2, name: 'lorem', rating: 5 },
            ]}
          />
        </SkeletonText>
      </>
    }
    likeButton={<SkeletonCircle>Lorem.</SkeletonCircle>}
    likes={<Skeleton>Lorem</Skeleton>}
  />
)
