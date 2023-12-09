import { brandHoverBg } from 'src/theme/colors'
import {
  BrandVariants,
  GetButtonBrandVariantStyleFunction,
} from '../button.types'
import { getDefaultVariantStyle } from './getDefaultVariantStyle'

export const getButtonBrandVariantStyleFunction: GetButtonBrandVariantStyleFunction =
  (buttonVariant) => (props) => {
    const { colorMode } = props
    const isDarkMode = colorMode === 'dark'
    const defaultVariantStyle = getDefaultVariantStyle(props, buttonVariant)

    const darkBrandGhostStyle = {
      ...defaultVariantStyle,
      color: props.colorScheme === 'brand' ? 'white' : 'initial',
      _hover: {
        bg: props.colorScheme === 'brand' ? brandHoverBg : 'initial',
      },
    }

    const lightBrandVariantStyle = defaultVariantStyle

    const brandVariants: BrandVariants = {
      ghost: isDarkMode ? darkBrandGhostStyle : lightBrandVariantStyle,
      link: { ...defaultVariantStyle },
      outline: { ...defaultVariantStyle },
      solid: { ...defaultVariantStyle },
    }

    return brandVariants[buttonVariant]
  }
