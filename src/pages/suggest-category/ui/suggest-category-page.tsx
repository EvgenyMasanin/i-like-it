import { DevTool } from '@hookform/devtools'
import { Box, Button, Spacer, Text } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'

import { CreateCategoryDto, createCategoryDtoSchema } from '~/entities/category/model'
import { Form, ImageUploadField, InputField } from '~/shared/modules/chakra-hook-form'

import { useForm } from 'react-hook-form'

export const SuggestCategoryPage = () => {
  const formMethods = useForm<CreateCategoryDto>({ resolver: zodResolver(createCategoryDtoSchema) })
  const { reset, control } = formMethods

  const onSubmit = (data: CreateCategoryDto) => {
    console.log('🚀 ~ onSubmit ~ data:', data)
    reset()
  }

  return (
    <Box>
      <Text fontSize="4xl">Suggest your category!</Text>
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
      <DevTool control={control} />
    </Box>
  )
}
