import { Drawer, DrawerContent, Flex } from '@chakra-ui/react'
import { useRef } from 'react'
import { FiCompass, FiHeart, FiPhone, FiTable, FiTrendingUp } from 'react-icons/fi'
import { Paths } from 'src/router'
import { LinkItemProps, Nav } from './nav'

interface SidebarWithHeaderProps {
  // onOpen: () => void
  onClose: () => void
  isOpen: boolean
  collapsed?: boolean
}

const Sidebar = ({ isOpen, onClose, collapsed }: SidebarWithHeaderProps) => {
  const linkItems = useRef<LinkItemProps[]>([
    {
      name: 'Recommended',
      path: Paths.recommended,
      icon: FiTrendingUp,
      active: true,
    },
    { name: 'Categories', path: Paths.categories, icon: FiTable, active: false },
    { name: 'Suggest a category', path: Paths.suggestCategory, icon: FiCompass, active: false },
    { name: 'Favorites', path: Paths.favorites, icon: FiHeart, active: false },
    { name: 'Contact Us', path: Paths.contactUs, icon: FiPhone, active: false },
  ])
  return (
    <Flex as="nav">
      <Nav
        collapsed={collapsed}
        linkItems={linkItems.current}
        onClose={() => onClose}
        display={{ base: 'none', md: 'flex' }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Nav onClose={onClose} linkItems={linkItems.current} />
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default Sidebar

// export interface SideBarProps {}

// export const SideBar = ({}: SideBarProps) => {
//   return <div>SideBar</div>
// }
