import { Flex } from '@chakra-ui/react'

/* eslint-disable react/no-array-index-key */
import { FaRegStar, FaStar } from 'react-icons/fa'

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
