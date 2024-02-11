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
export interface UpdateCategoryDto {
  name?: string
  description?: string
  categoryImage?: any
}
