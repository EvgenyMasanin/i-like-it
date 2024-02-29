import { CardsGrid } from '~/shared/ui'
import { MemberCardSkeleton } from '~/entities/member/ui/member-card'

import { useRef } from 'react'

export const CategoryMembersSkeleton = () => {
  const membersSkeleton = useRef(
    Array(5)
      .fill(0)
      .map((_, i) => <MemberCardSkeleton key={i} />)
  )

  return <CardsGrid>{membersSkeleton.current}</CardsGrid>
}
