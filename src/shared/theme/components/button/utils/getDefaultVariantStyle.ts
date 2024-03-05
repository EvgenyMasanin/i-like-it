import { SystemStyleFunction, theme } from '@chakra-ui/react'

import { ButtonChakraVariants } from '~/shared/theme'

import { getNewDefaultButtonVariantStyleFunction } from './getNewDefaultButtonVariantStyleFunction'

export const getDefaultVariantStyle =
  (buttonVariant: ButtonChakraVariants): SystemStyleFunction =>
  (props) => {
    const chakraVariantStyle = theme.components.Button.variants![buttonVariant]

    return {
      ...chakraVariantStyle(props),
      ...getNewDefaultButtonVariantStyleFunction(buttonVariant)(props),
    }
  }
