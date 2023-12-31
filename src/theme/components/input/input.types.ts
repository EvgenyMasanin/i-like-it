import { ColorSchemes, colors } from 'src/theme/colors'

export const isCustomColorScheme = (colorScheme: string): colorScheme is ColorSchemes =>
  colorScheme in colors
