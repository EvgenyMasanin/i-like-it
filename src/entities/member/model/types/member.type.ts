import { Characteristic } from '~/entities/member/model/types'

export interface Member {
  id: number
  name: string
  imgSrc: string
  description: string
  characteristics: Characteristic[]
  authorId: number
  authorImgSrc: string
}
