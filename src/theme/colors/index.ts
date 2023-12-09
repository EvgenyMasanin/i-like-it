import { brand, brandHoverBg, lightBrand, darkBrand } from './brand'

export * from './brand'

export enum ColorSchemes {
  brand = 'brand',
}

export enum CustomColors {
  brandHoverBg = 'brandHoverBg',
  lightBrand = 'lightBrand',
  darkBrand = 'darkBrand',
}

export enum ChakraColors {
  initial = 'initial',
}

export const colors = {
  brand,
  brandHoverBg,
  lightBrand,
  darkBrand,
}
