import { RecursivePartial } from 'src/types/utils'

export type ComponentThemeType<ComponentDefaultStyle, ComponentCustomStyle> =
  RecursivePartial<ComponentDefaultStyle | ComponentCustomStyle>
