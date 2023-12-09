import { BrandColorTheme, ChakraColors } from 'src/theme/colors'
import { GetNewDefaultButtonVariantStyleFunction, variantColor } from '../button.types'

export const getNewDefaultButtonVariantStyleFunction: GetNewDefaultButtonVariantStyleFunction =
  (buttonVariant) =>
  ({ colorScheme }) => {
    const brandColor = variantColor[buttonVariant]

    const isBrand = colorScheme === BrandColorTheme

    const brandColorScheme = {
      color: brandColor,
    }

    const defaultColorScheme = {
      color: ChakraColors.initial,
    }

    return isBrand ? brandColorScheme : defaultColorScheme
  }
