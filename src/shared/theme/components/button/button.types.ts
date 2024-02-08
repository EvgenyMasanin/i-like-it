import { StyleFunctionProps } from '@chakra-ui/react'

import { ButtonVariants } from '~/shared/theme'
import { CustomColors } from '~/shared/theme/colors'

import { ButtonDefaultStyle } from './button'
import { ComponentThemeType } from '../types'

export const variantColor = {
  solid: 'white',
  link: CustomColors.lightBrand,
  ghost: CustomColors.lightBrand,
  outline: CustomColors.lightBrand,
}

export type ButtonVariantsType = {
  bg?: string
  color?: string
  _hover?: {
    bg?: string
    _disabled?: {
      bg?: string
    }
  }
  _active?: {
    bg?: string
  }
}

export type BrandVariants = Record<ButtonVariants, object>

export type ButtonCustomStyle = {
  variants: Record<string, (props: StyleFunctionProps) => ButtonVariantsType>
}

export type ButtonThemeType = ComponentThemeType<typeof ButtonDefaultStyle, ButtonCustomStyle>

export type GetDefaultVariantStyle = (
  props: StyleFunctionProps,
  buttonVariant: ButtonVariants
) => object

export type GetNewDefaultButtonVariantStyleFunction = (
  buttonVariant: ButtonVariants
) => (props: StyleFunctionProps) => object

export type GetButtonBrandVariantStyleFunction = GetNewDefaultButtonVariantStyleFunction
