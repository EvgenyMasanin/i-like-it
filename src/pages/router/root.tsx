import { Box, Flex, Spinner } from '@chakra-ui/react'

import { Main } from '~/widgets/main/ui'
import { Header } from '~/widgets/header/ui'
import { Sidebar } from '~/widgets/sidebar/ui'
import { OverlayUtils } from '~/widgets/devtools/ui'
import { useAuth } from '~/features/auth/lib/hooks'

import { Outlet, useNavigation } from 'react-router-dom'

export interface AppProps {}

export const Root = () => {
  const { state } = useNavigation()

  const { isLoading, isAuthorizeFailed, isAuth } = useAuth('init')

  if (isLoading) return <Spinner />
  if (!isAuthorizeFailed && !isAuth) return <Spinner />

  return (
    <Flex h="100vh" flexDirection="column">
      <OverlayUtils />
      <Header />
      <Main>
        <Sidebar />
        <Box px={5} overflow="auto">
          {state === 'loading' ? <Spinner /> : <Outlet />}
        </Box>
      </Main>
    </Flex>
  )
}