import { Flex, FlexProps, Icon, Box, Text, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { useHoverColor as useHoverColors } from 'src/theme'
import { CustomColors } from 'src/theme/colors'

export interface NavItemProps extends FlexProps {
  icon: IconType
  children: React.ReactNode
  collapsed?: boolean
  active?: boolean
}

export const NavItem = ({ icon, children, collapsed, active, ...rest }: NavItemProps) => {
  const colors = useHoverColors()

  const unActiveIconColor = useColorModeValue(CustomColors.lightBrand, 'white')

  const iconColor = active ? 'white' : unActiveIconColor
  return (
    <Box as="a" href="#" _focus={{ boxShadow: 'none' }}>
      <Flex
        as={motion.div}
        align="center"
        p="4"
        h="14"
        borderLeftRadius={{ base: 'none', lg: 'lg' }}
        borderRightRadius="lg"
        role="group"
        cursor="pointer"
        overflow="hidden"
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
  visible: { width: '100%', opacity: 1, marginLeft: 16 },
}

const AnimatedText = motion(Text)
