import { ChangeEvent } from 'react'
import { FieldPath, FieldValues, PathValue, RegisterOptions, useFormContext } from 'react-hook-form'

interface ImageUploadFieldProps<T extends FieldValues> {
  name: FieldPath<T>
  registerOptions?: RegisterOptions<T, FieldPath<T>>
}

export function useImageUploadField<T extends FieldValues>({
  name,
  registerOptions,
}: ImageUploadFieldProps<T>) {
  const {
    register,
    setError,
    setValue,
    formState: { errors },
    clearErrors,
  } = useFormContext<T>()

  const { onChange, ...registerProps } = register(name, registerOptions)

  const onImagesDelete = (files: FileList) => {
    setValue(name, files as PathValue<T, FieldPath<T>>)
  }

  const setValidationError = (name: FieldPath<T>) => {
    setError(name, { message: 'Only jpeg files are allowed' })
  }

  const handleDropValidate = (isValid: boolean) => {
    if (isValid) {
      clearErrors(name)
      return
    }
    setValidationError(name)
  }

  const handleDrop = (files: FileList) => {
    setValue(name, files as PathValue<T, FieldPath<T>>)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>, isValid: boolean) => {
    if (isValid) {
      onChange(e)
      return
    }
    setValidationError(name)
  }

  return {
    onFileDelete: onImagesDelete,
    onDropValidate: handleDropValidate,
    onChange: handleChange,
    handleDrop,
    isInvalid: !!errors[name],
    errorMessage: errors[name]?.message?.toString(),
    ...registerProps,
  }
}
