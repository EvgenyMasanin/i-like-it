import { FieldPath, FieldValues, RegisterOptions } from 'react-hook-form'

export interface RegisterFieldProps<T extends FieldValues> {
  name: FieldPath<T>
  registerOptions?: RegisterOptions<T, FieldPath<T>>
  label: string
}
