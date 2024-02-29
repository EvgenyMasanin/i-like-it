import { PaginationParams } from '~/shared/types/pagination.interface'

export interface CategoryDto {
  id: number
  name: string
  description: string
  imageUrl: string
  authorId: number
  authorAvatarURL: string
  authorName: string
}
// TODO: form-data

export type CreateCategoryDto = {
  name: string
  description: string
  categoryImage: any
}

export type UpdateCategoryDto = Partial<CreateCategoryDto>

export interface CategoryFilterParams extends PaginationParams {
  name?: string
  authorId?: number
  categoryId?: number
}
