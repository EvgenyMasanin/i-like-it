import { InputField as InputFieldUI } from '~/shared/ui'

import { FieldValues, useFormContext } from 'react-hook-form'

import { RegisterFieldProps } from './types'

interface InputFieldProps<T extends FieldValues> extends RegisterFieldProps<T> {}

export const InputField = <T extends FieldValues>({
  name,
  registerOptions,
  label,
}: InputFieldProps<T>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>()

  return (
    <InputFieldUI
      label={label}
      {...register(name, registerOptions)}
      isInvalid={!!errors[name]}
      errorMessage={errors[name]?.message?.toString()}
    />
  )
}
