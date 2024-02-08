import { Box, Flex, FlexProps, Text } from '@chakra-ui/react'

import { Path } from '~/shared/paths'
import { useTextColor } from '~/shared/theme'

import { Link } from 'react-router-dom'
import { BsChatHeartFill } from 'react-icons/bs'

export interface LogoProps extends FlexProps {}

// TODO: create Brand colorScheme for Text
export const Logo = (props: LogoProps) => {
  const { fontSize } = props
  return (
    <Flex {...props} as={Link} to={Path.root}>
      <Text
        color={useTextColor()}
        fontSize={fontSize || '4xl'}
        fontStyle="italic"
        fontWeight="extrabold"
        fontFamily="monospace"
      >
        I Like It
      </Text>
      <Box pt={1}>
        <BsChatHeartFill size={25} fill={useTextColor()} />
      </Box>
    </Flex>
  )
}
