import {
  Flex,
  FlexProps,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Show,
} from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

export interface SearchProps extends FlexProps {}

export const Search = (props: SearchProps) => (
  <Flex {...props} w="full" rounded={10}>
    <Show below="md">
      <InputGroup rounded="inherit">
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input placeholder="Search" rounded="inherit" />
      </InputGroup>
    </Show>
    <Show above="md">
      <InputGroup rounded="inherit">
        <Input
          placeholder="Search"
          rounded="inherit"
          // borderRightRadius={{ md: 'none' }}
        />
        <InputRightElement>
          <IconButton
            rounded={10}
            variant="brandGhost"
            aria-label="search"
            icon={<BsSearch />}
            borderLeftRadius="none"
            // border="1px solid"
            // borderColor="whiteAlpha.300"
            // borderLeft="none"
          />
        </InputRightElement>
      </InputGroup>
    </Show>
  </Flex>
)
