import { ImageUploadField as UIImageUploadField } from '~/shared/ui'

import { FieldValues } from 'react-hook-form'

import { RegisterFieldProps } from '../types'
import { useImageUploadField } from './use-image-upload-field'

interface ImageUploadFieldProps<T extends FieldValues> extends RegisterFieldProps<T> {
  multiple?: boolean
  placeholder?: string
}

export const ImageUploadField = <T extends FieldValues>({
  name,
  registerOptions,
  label,
  placeholder,
  multiple,
}: ImageUploadFieldProps<T>) => {
  const imageUploadProps = useImageUploadField({
    name,
    registerOptions,
  })

  return (
    <UIImageUploadField
      {...imageUploadProps}
      multiple={multiple}
      label={label}
      placeholder={placeholder}
    />
  )
}
