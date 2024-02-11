import { Characteristic } from '~/entities/member/model/types'
import { PaginationParams } from '~/shared/types/pagination.interface'

import { MemberGallery } from './member-gallery.interface'

export interface Member {
  id: number
  name: string
  imgSrc: string
  description: string
  characteristics: Characteristic[]
  authorId: number
  authorImgSrc: string
}

export type MemberDto = {
  id: number
  name: string
  description: string
  categoryId: number
  authorId: number
  characteristics: Characteristic[]
  gallery: MemberGallery[]
  usersLikesIds: number[]
  likesCount: number
  authorAvatarURL: string
  authorName: string
  categoryName: string
}

export interface CreateMemberDto {
  name: string
  description: string
  categoryId: number
  characteristics: Array<{
    name: string
    rating: number
  }>
}

export type UpdateMemberDto = Partial<CreateMemberDto>

export interface MemberFilterParams extends PaginationParams {
  limit?: number
  offset?: number
  name?: string
  authorId?: number
  categoryId?: number
}
