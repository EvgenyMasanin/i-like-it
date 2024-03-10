import { Button, Spacer } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'

import { CreateCategoryDto, createCategoryDtoSchema } from '~/entities/category/model'
import { useCreateCategoryMutation } from '~/entities/category/api/category.api'
import { Form, ImageUploadField, InputField } from '~/shared/modules/chakra-hook-form'

import { useForm } from 'react-hook-form'

export interface SuggestCategoryFormProps {}

export const SuggestCategoryForm = ({}: SuggestCategoryFormProps) => {
  const formMethods = useForm<CreateCategoryDto>({
    resolver: zodResolver(createCategoryDtoSchema),
    defaultValues: { name: '', description: '', categoryImage: [] },
  })
  const { reset } = formMethods

  const [createCategory] = useCreateCategoryMutation()

  const onSubmit = (data: CreateCategoryDto) => {
    console.log('🚀 ~ onSubmit ~ data:', data)
    createCategory(data)
    reset()
  }

  return (
    <Form {...formMethods} onSubmit={onSubmit}>
      <InputField name="name" label="Category name" />
      <InputField name="description" label="What about this category?" />

      <ImageUploadField
        name="categoryImage"
        label="Load images"
        placeholder="Drag and drop images here, or click to select images"
      />
      <Spacer />
      <Button type="submit">Create</Button>
      <Button onClick={() => reset()}>Reset</Button>
    </Form>
  )
}
