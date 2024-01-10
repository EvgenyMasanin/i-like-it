/* eslint-disable react/no-array-index-key */
/* eslint-disable no-empty-pattern */
import { FaRegStar, FaStar } from 'react-icons/fa'

import { Flex } from '@chakra-ui/react'

export interface RatingProps {
  starsNumber: number
}

export const Rating = ({ starsNumber }: RatingProps) => (
  <Flex>
    {Array(5)
      .fill(0)
      .map((_, i) =>
        i + 1 <= starsNumber ? <FaStar key={i} fill="orange" /> : <FaRegStar key={i} />
      )}
  </Flex>
)
