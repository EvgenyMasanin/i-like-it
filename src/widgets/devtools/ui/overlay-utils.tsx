import { Button, Stack, useDisclosure } from '@chakra-ui/react'

import { useMount } from '~/shared/hooks'

import { BpShower } from './bp-shower'
import { UserSelector } from './user-selector'

export const OverlayUtils = () => {
  useMount(() => {
    // eslint-disable-next-line no-console
    console.log('This component must uses only for development mode')
  })

  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false })

  const text = isOpen ? 'hide' : 'show'

  return (
    <Stack position="absolute" bottom={1} left={1} gap={2} p={1} rounded="xl" bg="blackAlpha.200">
      {isOpen && (
        <>
          <BpShower />
          <UserSelector />
        </>
      )}
      <Button colorScheme="orange" w="28" onClick={onToggle}>
        {`${text} overlay`}
      </Button>
    </Stack>
  )
}
