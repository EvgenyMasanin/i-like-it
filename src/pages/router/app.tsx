import { useState } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'

import { Flex, Spinner, useDisclosure } from '@chakra-ui/react'
import { BreakPoints, useTypedBreakpoint } from '@sheared/theme'
import { Header } from '@widgets/header/ui'
import { Main } from '@widgets/main/ui'
import { OverlayUtils } from '@widgets/overlay-utils/ui'
import { Sidebar } from '@widgets/sidebar/ui'

export interface AppProps {}

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [collapse, setCollapse] = useState(false)

  const collapseSideBar = () => setCollapse(!collapse)

  const breakpoint = useTypedBreakpoint()

  const allowCollapseBreakpoints: Array<BreakPoints> = ['md', 'lg', 'xl', '2xl']

  const menuButtonAction = allowCollapseBreakpoints.includes(breakpoint) ? collapseSideBar : onOpen

  const { state } = useNavigation()

  return (
    <Flex h="100vh" flexDirection="column">
      <OverlayUtils />

      <Header menuButtonAction={menuButtonAction} />

      <Main>
        <Sidebar collapsed={collapse} isOpen={isOpen} onClose={onClose} />
        {state === 'loading' ? <Spinner /> : <Outlet />}
      </Main>
    </Flex>
  )
}
