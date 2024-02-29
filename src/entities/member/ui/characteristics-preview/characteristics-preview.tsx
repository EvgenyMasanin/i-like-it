import { Badge, Flex } from '@chakra-ui/react'

import { Characteristic } from '../characteristic'
import { Characteristic as ICharacteristic } from '../../model/types'

export interface CharacteristicsPreviewProps {
  characteristics: ICharacteristic[]
}

export const CharacteristicsPreview = ({ characteristics }: CharacteristicsPreviewProps) => (
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
)
