import { Box, Text, useStyleConfig } from '@chakra-ui/react'

import { DragEventHandler, MouseEventHandler, PropsWithChildren } from 'react'

interface DropZoneProps extends PropsWithChildren {
  isInvalid?: boolean
  highlight?: boolean
  placeholder?: string
  onDragOver: DragEventHandler<HTMLDivElement>
  onDragLeave: DragEventHandler<HTMLDivElement>
  onDrop: DragEventHandler<HTMLDivElement>
  openFileDialog: MouseEventHandler<HTMLDivElement>
}

const getVariant = (defaultVariant: string, ...variants: { name: string; isActive: boolean }[]) =>
  variants.find((variant) => variant.isActive)?.name ?? defaultVariant

export const FileDropZone = ({
  isInvalid,
  highlight,
  placeholder,
  onDrop,
  onDragOver,
  onDragLeave,
  openFileDialog,
  children,
}: DropZoneProps) => {
  const variant = getVariant(
    'default',
    { name: 'highlight', isActive: !!highlight },
    { name: 'invalid', isActive: !!isInvalid }
  )

  const styles = useStyleConfig('DropZone', { variant })

  return (
    <Box
      __css={styles}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={openFileDialog}
    >
      <Text textAlign="center">{placeholder}</Text>
      {children}
    </Box>
  )
}
