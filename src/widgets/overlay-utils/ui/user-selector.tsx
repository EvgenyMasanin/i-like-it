import {
  Box,
  Stack,
  useColorModeValue,
  useRadio,
  useRadioGroup,
  UseRadioProps,
} from '@chakra-ui/react'
import { useActions } from '@shared/redux-store/hooks'
import { adminUser, commonUser, mockTokens } from '@shared/mock/user.mock'

import { ReactNode } from 'react'

export const UserSelector = () => {
  const users = [adminUser, commonUser, null]
  const userNames = [`admin-${adminUser.name}`, `common-${commonUser.name}`, 'guest']

  const { setCredentials } = useActions()

  const selectCurrentUser = (val: string) => {
    setCredentials({ user: users[+val], tokens: { ...mockTokens, isTokenExpired: false } })
  }

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'users',
    defaultValue: '0',
    onChange: selectCurrentUser,
  })
  const group = getRootProps()
  return (
    <Stack {...group}>
      {['0', '1', '2'].map((value) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {userNames[+value]}
          </RadioCard>
        )
      })}
    </Stack>
  )
}

interface RadioCard extends UseRadioProps {
  children: ReactNode
}

const RadioCard = (props: RadioCard) => {
  const { getInputProps, getRadioProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getRadioProps()

  const color = useColorModeValue('lightBrand', 'darkBrand')

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: color,
          color: 'white',
          borderColor: color,
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props!.children}
      </Box>
    </Box>
  )
}
