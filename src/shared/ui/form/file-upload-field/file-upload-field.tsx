import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
  Stack,
  useMergeRefs,
} from '@chakra-ui/react'

import { ChangeEvent, forwardRef, MouseEventHandler, ReactNode } from 'react'

import FilesPreview from './files-preview'
import { FileDropZone } from './file-drop-zone'
import { FileValidator, useDropZoneFileInput } from './use-file-drop-zone'

export interface FileUploadProps extends Omit<InputProps, 'onChange'> {
  handleDrop: (files: FileList) => void
  onChange: (e: ChangeEvent<HTMLInputElement>, isValid: boolean) => void
  label: string
  errorMessage?: string
  validators?: FileValidator[]
  onFileDelete: (fileToDelete: FileList) => void
  renderFilesPreview?: (files: File[], onFileDelete: (file: File) => () => void) => ReactNode
}

export const FileUploadField = forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      handleDrop,
      placeholder,
      label,
      isInvalid,
      errorMessage,
      validators = [],
      onFileDelete,
      multiple,
      name = '',
      onChange = () => {},
      renderFilesPreview,
      ...props
    },
    ref
  ) => {
    const { fileInputRef, files, handleChange, handleFileDelete, ...dropZoneProps } =
      useDropZoneFileInput({
        handleDrop,
        validators,
        onFileDelete,
        onChange,
        multiple,
      })

    const mergedRef = useMergeRefs(fileInputRef, ref)

    const preventFormLabelClick: MouseEventHandler<HTMLLabelElement> = (e) => {
      e.preventDefault()
      e.stopPropagation()
    }

    return (
      <Stack gap={2}>
        <FormControl isInvalid={isInvalid}>
          <FormLabel onClick={preventFormLabelClick} fontSize="xl">
            {label}
          </FormLabel>
          <FileDropZone isInvalid={isInvalid} placeholder={placeholder} {...dropZoneProps}>
            <Input
              ref={mergedRef}
              type="file"
              display="none"
              multiple={multiple}
              name={name}
              {...props}
              onChange={handleChange}
            />
          </FileDropZone>
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
        <FilesPreview
          files={files}
          onFileDelete={handleFileDelete}
          renderFilesPreview={renderFilesPreview}
        />
      </Stack>
    )
  }
)

FileUploadField.displayName = 'FileUpload'
