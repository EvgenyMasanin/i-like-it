export const BrandColorTheme = 'brand'

export const brand = {
  50: '#FAF5FF',
  100: '#E9D8FD',
  200: '#553C9A',
  300: '#B794F4',
  400: '#9F7AEA',
  500: '#805AD5',
  600: '#6B46C1',
  700: '#553C9A',
  800: '#44337A',
  900: '#322659',
}

export enum brandColorModeShade {
  light = 500,
  dark = 200,
}

export const brandHoverBg = brand[800]

export const lightBrand = brand[brandColorModeShade.light]
export const darkBrand = brand[brandColorModeShade.dark]
