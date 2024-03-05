import * as z from 'zod'

import { getFiles } from '~/shared/ui/form/lib'
import { validateImage } from '~/shared/lib/validate-image'

export const createCategoryDtoSchema = z.object({
  name: z.string().min(3, { message: 'Name is too short' }),
  description: z.string().min(2, { message: 'Description is too short' }),
  categoryImage: z.instanceof(FileList).superRefine(validateImageFileList),
})

function validateImageFileList(fileList: FileList, ctx: z.RefinementCtx) {
  const files = getFiles(fileList, false)

  if (files.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Category image is required',
    })
  }

  if (!validateImage(files)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Only jpeg images are allowed',
    })
  }
}
export type CreateCategoryDto = z.infer<typeof createCategoryDtoSchema>
