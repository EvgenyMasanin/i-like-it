import { theme } from '@chakra-ui/react'

import { BrandColorTheme } from '~/shared/theme/colors'

import { GetNewDefaultButtonVariantStyleFunction, variantColor } from '../button.types'

export const getNewDefaultButtonVariantStyleFunction: GetNewDefaultButtonVariantStyleFunction =
  (buttonVariant) => (props) => {
    const brandColor = variantColor[buttonVariant]

    const isBrand = props.colorScheme === BrandColorTheme

    const brandColorScheme = {
      color: brandColor,
    }

    const defaultVariantStyle = theme.components.Button.variants![buttonVariant]

    const defaultColorScheme = {
      color: defaultVariantStyle(props).color,
    }

    return isBrand ? brandColorScheme : defaultColorScheme
  }
