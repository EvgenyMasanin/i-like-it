import { Box, Flex, FlexProps, Text } from '@chakra-ui/react'
import { BsChatHeartFill } from 'react-icons/bs'
import { useTextColor } from 'src/theme'

export interface LogoProps extends FlexProps {}

// TODO: create Brand colorScheme for Text
export const Logo = (props: LogoProps) => (
  <Flex {...props}>
    <Text
      color={useTextColor()}
      fontSize="4xl"
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
