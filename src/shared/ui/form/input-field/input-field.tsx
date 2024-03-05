import { FormControl, FormErrorMessage, FormLabel, Input, InputProps } from '@chakra-ui/react'

import { forwardRef } from 'react'

export interface InputFieldProps extends InputProps {
  errorMessage?: string
  label: string
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ isInvalid, label, placeholder, errorMessage, ...props }, ref) => (
    <FormControl isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <Input ref={ref} placeholder={placeholder || label || ''} {...props} />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
)

InputField.displayName = 'InputField'
