import { AnimatePresence } from 'framer-motion'
import { Box, Flex, Spinner } from '@chakra-ui/react'

import { AnimatedPage } from '~/shared/ui'
import { Main } from '~/widgets/main/ui'
import { Header } from '~/widgets/header/ui'
import { Sidebar } from '~/widgets/sidebar/ui'
import { OverlayUtils } from '~/widgets/devtools/ui'
import { useAuth } from '~/features/auth/lib/hooks'

import { Outlet, useLocation, useNavigation } from 'react-router-dom'

export interface AppProps {}

export const Root = () => {
  const { state } = useNavigation()

  const { pathname } = useLocation()

  const { isLoading, isAuthorizeFailed, isAuth } = useAuth('init')

  if (isLoading) return <Spinner />
  if (!isAuthorizeFailed && !isAuth) return <Spinner />

  return (
    <AnimatePresence mode="wait">
      <Flex h="100vh" flexDirection="column">
        <OverlayUtils />
        <Header />
        <Main>
          <Sidebar />
          <Box px={5} overflow="auto">
            {state === 'loading' ? (
              <Spinner />
            ) : (
              // <AnimatedPage>
              <Outlet />
              // </AnimatedPage>
            )}
          </Box>
        </Main>
      </Flex>
    </AnimatePresence>
  )
}
