import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const getHighlightStyle = defineStyle(({ colorMode }) => ({
  bg: colorMode === 'light' ? 'lightBrand' : 'darkBrand',
  color: 'white',
  borderColor: 'white',
}))

export const dropZone = defineStyleConfig({
  baseStyle: ({ colorMode, ...props }) => ({
    p: 4,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 'lg',
    cursor: 'pointer',
    fontSize: 'x-large',
    fontWeight: 'bold',
    color: colorMode === 'light' ? 'gray.500' : 'whiteAlpha.400',
    borderColor: colorMode === 'light' ? 'gray.200' : 'whiteAlpha.300',
    _hover: getHighlightStyle({ colorMode, ...props }),
  }),
  variants: {
    highlight: ({ colorMode, ...props }) => getHighlightStyle({ colorMode, ...props }),

    invalid: ({ colorMode }) => ({
      borderColor: colorMode === 'light' ? 'red.500' : 'red.300',
    }),
  },
})
