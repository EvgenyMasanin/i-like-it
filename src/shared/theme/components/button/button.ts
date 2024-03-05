import { defineStyleConfig } from '@chakra-ui/react'

import { getButtonBrandVariantStyleFunction } from './utils/getButtonBrandVariantStyleFunction'
import { getNewDefaultButtonVariantStyleFunction } from './utils/getNewDefaultButtonVariantStyleFunction'

export const buttonTheme = defineStyleConfig({
  variants: {
    solid: getNewDefaultButtonVariantStyleFunction('solid'),
    link: getNewDefaultButtonVariantStyleFunction('link'),
    ghost: getNewDefaultButtonVariantStyleFunction('ghost'),
    outline: getNewDefaultButtonVariantStyleFunction('outline'),
    brandGhost: getButtonBrandVariantStyleFunction('ghost'),
  },
})
