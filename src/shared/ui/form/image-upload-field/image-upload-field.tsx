import { Box, IconButton, SimpleGrid } from '@chakra-ui/react'

import { validateImage } from '~/shared/lib'

import { forwardRef } from 'react'
import { IoIosClose } from 'react-icons/io'

import { PreviewImage } from '../..'
import { FileUploadField, FileUploadProps } from '..'

export interface ImageUploadFieldProps extends FileUploadProps {
  onDropValidate?: (isValid: boolean) => void
}

export const ImageUploadField = forwardRef<HTMLInputElement, ImageUploadFieldProps>(
  ({ onDropValidate, ...props }, ref) => {
    const imageValidator = (files: File[]) => {
      const isValid = validateImage(files)

      onDropValidate?.(isValid)

      return isValid
    }

    return (
      <FileUploadField
        ref={ref}
        accept="image/jpeg"
        validators={[imageValidator]}
        renderFilesPreview={(files, onDelete) => {
          const imagesUrls = files.map((file) => URL.createObjectURL(file))

          return (
            <SimpleGrid
              gridAutoFlow="column"
              gridAutoColumns="150px"
              overflowX="auto"
              overscrollBehaviorX="contain"
              scrollSnapType="inline mandatory"
              gap={2}
            >
              {imagesUrls.map((url, index) => (
                <Box key={files[index].name} scrollSnapAlign="start">
                  <PreviewImage
                    src={url}
                    imageCollectionUrls={imagesUrls}
                    overlayControls={
                      <IconButton
                        size="xs"
                        fontSize="2xl"
                        variant="solid"
                        icon={<IoIosClose />}
                        aria-label="delete file"
                        onClick={onDelete(files[index])}
                      />
                    }
                  />
                </Box>
              ))}
            </SimpleGrid>
          )
        }}
        {...props}
      />
    )
  }
)
