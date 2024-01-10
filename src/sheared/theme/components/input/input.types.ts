import { ColorSchemes, colors } from '@sheared/theme/colors'

export const isCustomColorScheme = (colorScheme: string): colorScheme is ColorSchemes =>
  colorScheme in colors
