import { useMatches } from 'react-router-dom'
import { LinkItemProps } from '.'
import { NavItem } from './nav-item'

interface navItemsProps {
  collapsed?: boolean
  linkItems: Array<LinkItemProps>
}

export const NavItems = ({ linkItems, collapsed }: navItemsProps) => {
  const [, { pathname }] = useMatches()

  return linkItems.map(({ icon, name, path }) => {
    const isActive = pathname.includes(path)

    return (
      <NavItem key={name} icon={icon} collapsed={collapsed} active={isActive} path={path}>
        {name}
      </NavItem>
    )
  })
}
