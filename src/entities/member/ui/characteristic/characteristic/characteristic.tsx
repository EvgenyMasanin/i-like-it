import { Flex, Text } from '@chakra-ui/react'

import { Characteristic as ICharacteristic } from '~/entities/member/model/types'

import { Rating } from '..'

export const Characteristic = ({ name, rating }: Omit<ICharacteristic, 'id'>) => (
  <Flex alignItems="center" gap={2}>
    <Text textTransform="capitalize">{name}</Text>
    <Rating starsNumber={rating} />
  </Flex>
)
