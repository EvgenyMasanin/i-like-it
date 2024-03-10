import { FieldPath, FieldValues, PathValue, RegisterOptions, useFormContext } from 'react-hook-form'

interface ImageUploadFieldProps<T extends FieldValues> {
  name: FieldPath<T>
  registerOptions?: RegisterOptions<T, FieldPath<T>>
  multiple?: boolean
}

export function useImageUploadField<T extends FieldValues>({
  name,
  registerOptions,
  multiple = false,
}: ImageUploadFieldProps<T>) {
  const {
    register,
    setError,
    setValue,
    formState: { errors },
    clearErrors,
  } = useFormContext<T>()

  const registerProps = register(name, registerOptions)

  const onImagesDelete = (files: File[]) => {
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

  const handleDrop = (files: File[]) => {
    setValue(name, files as PathValue<T, FieldPath<T>>)
  }

  const handleChange = (files: File[], isValid: boolean) => {
    if (isValid) {
      setValue(name, files as PathValue<T, FieldPath<T>>)

      return
    }
    setValidationError(name)
  }

  return {
    ...registerProps,
    onFileDelete: onImagesDelete,
    onDropValidate: handleDropValidate,
    handleDrop,
    isInvalid: !!errors[name],
    errorMessage: errors[name]?.message?.toString(),
    multiple,
    onChange: handleChange,
  }
}
