import { BoxProps, Stack } from '@chakra-ui/react'

import { useTypedSelector } from '~/shared/redux'
import { selectIsSidebarCollapsed } from '~/shared/redux/slices/sidebar.slice'

import { IconType } from 'react-icons'

import { NavItem } from './nav-item'

export interface LinkItemProps {
  name: string
  icon: IconType
  path: string
}

export interface NavProps extends BoxProps {
  linkItems: Array<LinkItemProps>
}

export const Nav = ({ linkItems, ...rest }: NavProps) => {
  const isCollapsed = useTypedSelector(selectIsSidebarCollapsed)

  return (
    <Stack transition=".3s ease" w={{ base: 'full', md: 'fit-content' }} {...rest}>
      {linkItems.map(({ icon, name, path }) => (
        <NavItem key={name} icon={icon} collapsed={isCollapsed} path={path}>
          {name}
        </NavItem>
      ))}
    </Stack>
  )
}
