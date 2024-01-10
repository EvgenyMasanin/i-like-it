import { RecursivePartial } from '@sheared/types/utils'

export type ComponentThemeType<ComponentDefaultStyle, ComponentCustomStyle> = RecursivePartial<
  ComponentDefaultStyle | ComponentCustomStyle
>
