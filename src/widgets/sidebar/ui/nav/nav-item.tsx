import { AnimatePresence, motion } from 'framer-motion'
import { CustomColors } from '@shared/theme/colors'
import { useHoverColor as useHoverColors } from '@shared/theme'
import { Box, Flex, FlexProps, Icon, Text, useColorModeValue } from '@chakra-ui/react'

import { IconType } from 'react-icons'
import { Link } from 'react-router-dom'

export interface NavItemProps extends FlexProps {
  icon: IconType
  children: React.ReactNode
  collapsed?: boolean
  active?: boolean
  path: string
}

export const NavItem = ({ icon, children, collapsed, active, path, ...rest }: NavItemProps) => {
  const colors = useHoverColors()

  const unActiveIconColor = useColorModeValue(CustomColors.lightBrand, 'white')

  const iconColor = active ? 'white' : unActiveIconColor
  return (
    <Box as={Link} to={path} _focus={{ boxShadow: 'none' }}>
      <Flex
        as={motion.div}
        align="center"
        p={4}
        h={14}
        borderLeftRadius={{ base: 'none', lg: 'lg' }}
        borderRightRadius="lg"
        role="group"
        cursor="pointer"
        color={active ? colors.color : 'unset'}
        bg={active ? colors.bg : 'unset'}
        _hover={colors}
        {...rest}
      >
        {icon && (
          <Icon
            fontSize="2xl"
            color={iconColor}
            _groupHover={{
              color: colors.color,
            }}
            as={icon}
          />
        )}
        <AnimatePresence initial={false}>
          {!collapsed && (
            <AnimatedText
              initial="hidden"
              exit="hidden"
              animate="visible"
              variants={textAnimation}
              whiteSpace="nowrap"
              overflow="hidden"
              ml="4"
            >
              {children}
            </AnimatedText>
          )}
        </AnimatePresence>
      </Flex>
    </Box>
  )
}

const textAnimation = {
  hidden: { width: 0.1, marginLeft: 0, opacity: 0 },
  visible: { width: 'auto', opacity: 1, marginLeft: 16 },
}

const AnimatedText = motion(Text)
