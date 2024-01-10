import { theme } from '@chakra-ui/react'

import { ButtonThemeType } from './button.types'
import { getButtonBrandVariantStyleFunction } from './utils/getButtonBrandVariantStyleFunction'
import { getNewDefaultButtonVariantStyleFunction } from './utils/getNewDefaultButtonVariantStyleFunction'

export const ButtonDefaultStyle = theme.components.Button

export const buttonTheme: ButtonThemeType = {
  variants: {
    solid: getNewDefaultButtonVariantStyleFunction('solid'),
    link: getNewDefaultButtonVariantStyleFunction('link'),
    ghost: getNewDefaultButtonVariantStyleFunction('ghost'),
    outline: getNewDefaultButtonVariantStyleFunction('outline'),
    brandGhost: getButtonBrandVariantStyleFunction('ghost'),
  },
}
