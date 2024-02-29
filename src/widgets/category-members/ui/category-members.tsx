import { CardsGrid, Error } from '~/shared/ui'
import { MemberCard } from '~/entities/member/ui'
import { useLazyFindAllMembersByFilterQuery } from '~/entities/member/api'
import { LikeMemberButton } from '~/features/member/like-member/ui'

import { useEffect } from 'react'

import { CategoryMembersSkeleton } from '.'

export interface CategoryMembersProps {
  categoryId: number | undefined
}

export const CategoryMembers = ({ categoryId }: CategoryMembersProps) => {
  const [getMembers, { data, isError, error, isLoading }] = useLazyFindAllMembersByFilterQuery()

  useEffect(() => {
    if (!categoryId) return

    getMembers({ limit: 10, offset: 0, categoryId })
  }, [categoryId, getMembers])

  if (isError) return <Error error={error} />

  const isLoaded = !isLoading && !!data

  return isLoaded ? (
    <CardsGrid>
      {data?.data.map((member) => (
        <MemberCard
          key={member.id}
          {...member}
          likeButton={
            <LikeMemberButton memberId={member.id} usersLikesIds={member.usersLikesIds} />
          }
        />
      ))}
    </CardsGrid>
  ) : (
    <CategoryMembersSkeleton />
  )
}
