import { Characteristic } from '@entities/characteristic/types/characteristic.type'

export interface Member {
  id: number
  name: string
  imgSrc: string
  description: string
  characteristics: Characteristic[]
  authorId: number
  authorImgSrc: string
}
