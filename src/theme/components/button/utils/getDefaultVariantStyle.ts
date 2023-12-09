import { theme } from '@chakra-ui/react'
import { GetDefaultVariantStyle } from '../button.types'
import { getNewDefaultButtonVariantStyleFunction } from './getNewDefaultButtonVariantStyleFunction'

export const getDefaultVariantStyle: GetDefaultVariantStyle = (
  props,
  buttonVariant
) => {
  const defaultVariantStyle = theme.components.Button.variants![buttonVariant]

  return {
    ...defaultVariantStyle(props),
    ...getNewDefaultButtonVariantStyleFunction(buttonVariant)(props),
  }
}
