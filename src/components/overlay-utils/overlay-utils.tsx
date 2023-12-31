import { Button, Stack, useDisclosure } from '@chakra-ui/react'
import { BpShower } from '../bp-shower'
import { UserSelector } from '../user-selector'

export const OverlayUtils = () => {
  const { isOpen, onToggle } = useDisclosure({})

  const text = isOpen ? 'hide' : 'show'

  return (
    <Stack position="absolute" top={1} left={1} gap={2} p={1} rounded="xl" bg="blackAlpha.200">
      <Button colorScheme="orange" w="28" onClick={onToggle}>
        {`${text} overlay`}
      </Button>
      {isOpen && (
        <>
          <BpShower />
          <UserSelector />
        </>
      )}
    </Stack>
  )
}
