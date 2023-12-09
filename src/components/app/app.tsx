import {
  Center,
  Flex,
  useBreakpoint,
  useDisclosure
} from '@chakra-ui/react'
import { useScroll } from 'framer-motion'
import { useRef, useState } from 'react'
import { Categories } from 'src/pages'
import { BreakPoints, useTypedBreakpoint } from 'src/theme'
import { Header } from '../header'
import { Main } from '../main'
import Sidebar from '../side-bar/side-bar'
import { TopButton } from '../top-button'

export interface AppProps {}

const BpShower = () => {
  const bp = useBreakpoint()
  return (
    <Center
      bgColor="orange"
      color="white"
      position="absolute"
      w={10}
      h={10}
      p={2}
      rounded={10}
      left={1}
      top={1}
    >
      {bp}
    </Center>
  )
}

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [collapse, setCollapse] = useState(false)

  const collapseSideBar = () => setCollapse(!collapse)

  const breakpoint = useTypedBreakpoint()

  const allowCollapseBreakpoints: Array<BreakPoints> = ['md', 'lg', 'xl', '2xl']

  const menuButtonAction = allowCollapseBreakpoints.includes(breakpoint) ? collapseSideBar : onOpen

  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({ container: ref })

  const handleClick = () => {
    ref.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Flex h="100vh" flexDirection="column">
      <BpShower />
      <Header menuButtonAction={menuButtonAction} />

      <Main>
        <Sidebar collapsed={collapse} isOpen={isOpen} onClose={onClose} />
        <Categories ref={ref} />
        <TopButton scrollY={scrollY} handleClick={handleClick} />
      </Main>
    </Flex>
  )
}
