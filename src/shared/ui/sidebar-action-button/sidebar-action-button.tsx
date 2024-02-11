import { IconButton } from '@chakra-ui/react'

import { BreakPoints, useTypedBreakpoint } from '~/shared/theme'
import { useSidebarActions } from '~/shared/redux/slices/sidebar.slice'

import { FiMenu } from 'react-icons/fi'

export interface SidebarActionButtonProps {}

export const SidebarActionButton = ({}: SidebarActionButtonProps) => {
  const { collapse, toggleDrawer } = useSidebarActions()

  const allowCollapseBreakpoints: Array<BreakPoints> = ['md', 'lg', 'xl', '2xl']

  const breakpoint = useTypedBreakpoint()

  const menuButtonAction = allowCollapseBreakpoints.includes(breakpoint) ? collapse : toggleDrawer

  return (
    <IconButton
      onClick={() => menuButtonAction()}
      rounded="full"
      variant="brandGhost"
      mx="1"
      fontSize="2xl"
      aria-label="open menu"
      icon={<FiMenu />}
    />
  )
}
