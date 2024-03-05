import { PropsWithChildren } from 'react'
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form'

interface FormProps<T extends FieldValues> extends PropsWithChildren, UseFormReturn<T> {
  onSubmit: (data: T) => void
}

export const Form = <T extends FieldValues>({
  children,
  onSubmit,
  handleSubmit,
  ...useFormReturn
}: FormProps<T>) => (
  <FormProvider handleSubmit={handleSubmit} {...useFormReturn}>
    <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
  </FormProvider>
)
