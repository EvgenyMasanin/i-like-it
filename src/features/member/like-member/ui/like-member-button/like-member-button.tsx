/* eslint-disable boundaries/element-types */
import { motion } from 'framer-motion'
import { Box, Flex, FlexProps, Icon, IconButton } from '@chakra-ui/react'

import { Path } from '~/shared/paths'
import { useAuth } from '~/features/auth/lib/hooks'
import { useLikeMemberMutation } from '~/entities/member/api'
import { selectUserId } from '~/entities/user/model/slices'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BsFillHeartFill, BsHearts } from 'react-icons/bs'

export interface LikeMemberButtonProps extends FlexProps {
  memberId: number
  usersLikesIds: number[]
}

const MIconButton = motion(IconButton)

export const LikeMemberButton = ({ memberId, usersLikesIds, ...props }: LikeMemberButtonProps) => {
  const [likeMember] = useLikeMemberMutation()
  const { isAuth } = useAuth()
  const navigate = useNavigate()
  const currentUserId = useSelector(selectUserId)

  const isCurrentUserLiked = usersLikesIds.some((userId) => userId === currentUserId)
  const [isLiked, setIsLiked] = useState(isCurrentUserLiked)

  const handleClick = () => {
    if (!isAuth) {
      navigate(`/${Path.auth}/${Path.signin}`)
      return
    }

    likeMember(memberId)
    setIsLiked((prevIsLiked) => !prevIsLiked)
  }

  return (
    <Flex direction="column" position="relative" {...props}>
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
          <Icon
            as={BsFillHeartFill}
            _hover={{ opacity: 0.7 }}
            color={isLiked && isAuth ? 'red.500' : 'white'}
          />
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
          isLiked
            ? {
                zIndex: 1,
                translateY: [-5, -10, -15, -20, -30],
                rotate: [-10, 10, -10, 10, 0],
                opacity: [0, 1, 1, 1, 0],
                transition: { duration: 0.5 },
              }
            : {}
        }
      >
        <BsHearts fill="red" />
      </Box>
    </Flex>
  )
}
