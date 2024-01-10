import { motion } from 'framer-motion'
import { useState } from 'react'
import { BsFillHeartFill, BsHearts } from 'react-icons/bs'

import { Box, Flex, FlexProps, Icon, IconButton, useDisclosure } from '@chakra-ui/react'

export interface LikeMemberButtonProps extends FlexProps {
  memberId: number
}

const MIconButton = motion(IconButton)

export const LikeMemberButton = ({ memberId, ...props }: LikeMemberButtonProps) => {
  const { isOpen, onOpen } = useDisclosure()

  const [like, setLike] = useState(false)
  console.log('🚀 ~ LikeMemberButton ~ isOpen:', isOpen)
  console.log('🚀 ~ LikeMemberButton ~ memberId:', memberId)

  const handleClick = () => {
    onOpen()
    setLike((prev) => !prev)
  }

  return (
    <Flex gap={5} position="relative" {...props}>
      <MIconButton
        onClick={handleClick}
        variant="unstyled"
        backgroundColor="gray.700"
        rounded="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        aria-label="Like"
        fontSize="3xl"
        icon={
          <Icon as={BsFillHeartFill} _hover={{ opacity: 0.7 }} color={like ? 'red.500' : 'white'} />
        }
        whileHover={{
          rotate: [0, -30, 30, 0],
        }}
        transition={{ duration: 0.3 }}
      />
      <Box
        position="absolute"
        left="30%"
        as={motion.div}
        opacity={0}
        zIndex={-1}
        animate={
          isOpen && {
            zIndex: 1,
            translateY: [-5, -10, -15, -20, -30],
            rotate: [-10, 10, -10, 10, 0],
            opacity: [0, 1, 1, 1, 0],
            transition: { duration: 0.5 },
          }
        }
      >
        <BsHearts fill="red" />
      </Box>
    </Flex>
  )
}
