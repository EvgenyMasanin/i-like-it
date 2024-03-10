import { Box, Text } from '@chakra-ui/react'

import { SuggestCategoryForm } from '~/features/category/ui'

export const SuggestCategoryPage = () => (
  <Box>
    <Text fontSize="4xl">Suggest your category!</Text>
    <SuggestCategoryForm />
  </Box>
)
