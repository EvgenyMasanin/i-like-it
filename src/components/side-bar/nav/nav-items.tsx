import { LinkItemProps } from '.'
import { NavItem } from '../nav-item'

interface navItemsProps {
  collapsed?: boolean
  linkItems: Array<LinkItemProps>
}

export const NavItems = ({ linkItems, collapsed }: navItemsProps) =>
  linkItems.map(({ active, icon, name }) => (
    <NavItem key={name} icon={icon} collapsed={collapsed} active={active}>
      {name}
    </NavItem>
  ))
