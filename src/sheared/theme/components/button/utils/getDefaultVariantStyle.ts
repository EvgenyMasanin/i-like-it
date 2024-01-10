import { theme } from '@chakra-ui/react'
import { GetDefaultVariantStyle } from '../button.types'
import { getNewDefaultButtonVariantStyleFunction } from './getNewDefaultButtonVariantStyleFunction'

export const getDefaultVariantStyle: GetDefaultVariantStyle = (
  props,
  buttonVariant
) => {
  const chakraVariantStyle = theme.components.Button.variants![buttonVariant]

  return {
    ...chakraVariantStyle(props),
    ...getNewDefaultButtonVariantStyleFunction(buttonVariant)(props),
  }
}
