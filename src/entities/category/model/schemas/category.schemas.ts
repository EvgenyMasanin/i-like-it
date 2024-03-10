import * as z from 'zod'

import { validateImage } from '~/shared/lib'

export const createCategoryDtoSchema = z.object({
  name: z.string().min(3, { message: 'Name is too short' }),
  description: z.string().min(2, { message: 'Description is too short' }),
  categoryImage: z
    .instanceof(File)
    .array()
    .max(1, { message: 'Only one image is allowed' })
    .min(1, { message: 'Category image is required' })
    .refine((files: File[]) => validateImage(files), { message: 'Only jpeg images are allowed' }),
})

export type CreateCategoryDto = z.infer<typeof createCategoryDtoSchema>
