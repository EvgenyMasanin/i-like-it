import { Flex, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { BreakPoints, useTypedBreakpoint } from 'src/theme'
import { Header } from '../header'
import { Main } from '../main'
import Sidebar from '../side-bar/side-bar'
import { OverlayUtils } from '../overlay-utils'

export interface AppProps {}

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [collapse, setCollapse] = useState(false)

  const collapseSideBar = () => setCollapse(!collapse)

  const breakpoint = useTypedBreakpoint()

  const allowCollapseBreakpoints: Array<BreakPoints> = ['md', 'lg', 'xl', '2xl']

  const menuButtonAction = allowCollapseBreakpoints.includes(breakpoint) ? collapseSideBar : onOpen

  return (
    <Flex h="100vh" flexDirection="column">
      <OverlayUtils />

      <Header menuButtonAction={menuButtonAction} />

      <Main>
        <Sidebar collapsed={collapse} isOpen={isOpen} onClose={onClose} />
        <Outlet />
      </Main>
    </Flex>
  )
}
