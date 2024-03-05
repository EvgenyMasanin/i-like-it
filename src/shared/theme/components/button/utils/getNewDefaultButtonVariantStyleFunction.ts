import { defineStyle, SystemStyleFunction, theme } from '@chakra-ui/react'

import { ButtonChakraVariants } from '~/shared/theme'
import { BrandColorTheme } from '~/shared/theme/colors'

import { brandVariantColor } from '../button.types'

export const getNewDefaultButtonVariantStyleFunction =
  (buttonChakraVariant: ButtonChakraVariants): SystemStyleFunction =>
  (props) => {
    const isBrandColorScheme = props.colorScheme === BrandColorTheme

    const defaultVariantStyle = theme.components.Button.variants![buttonChakraVariant]

    const brandColor = brandVariantColor[buttonChakraVariant]
    const defaultColor = defaultVariantStyle(props).color

    return defineStyle({
      color: isBrandColorScheme ? brandColor : defaultColor,
    })
  }
