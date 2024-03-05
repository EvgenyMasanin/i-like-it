import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

import { ButtonChakraVariants } from '~/shared/theme'
import { brandHoverBg } from '~/shared/theme/colors'

import { getDefaultVariantStyle } from './getDefaultVariantStyle'

export const getButtonBrandVariantStyleFunction = (buttonVariant: ButtonChakraVariants) => {
  const getDefaultStyle = getDefaultVariantStyle(buttonVariant)

  const darkBrandGhostStyle = defineStyle((props) => ({
    ...getDefaultStyle(props),
    color: props.colorScheme === 'brand' ? 'white' : 'initial',
    _hover: {
      bg: props.colorScheme === 'brand' ? brandHoverBg : 'initial',
    },
  }))

  const brandVariants = defineStyleConfig({
    variants: {
      ghost: (props) =>
        props.colorMode === 'dark' ? darkBrandGhostStyle(props) : getDefaultStyle(props),
      link: (props) => getDefaultStyle(props),
      outline: (props) => getDefaultStyle(props),
      solid: (props) => getDefaultStyle(props),
    },
  })

  return brandVariants.variants![buttonVariant]
}
