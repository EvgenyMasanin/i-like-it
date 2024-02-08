import { RecursivePartial } from '@shared/types/utils'

export type ComponentThemeType<ComponentDefaultStyle, ComponentCustomStyle> = RecursivePartial<
  ComponentDefaultStyle | ComponentCustomStyle
>
