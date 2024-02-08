import { colors, ColorSchemes } from '@shared/theme/colors'

export const isCustomColorScheme = (colorScheme: string): colorScheme is ColorSchemes =>
  colorScheme in colors
