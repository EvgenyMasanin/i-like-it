import { Flex, SkeletonCircle, SkeletonText, Text, TextProps } from '@chakra-ui/react'

import { UserAvatar } from '..'

export interface UserInfoProps {
  avatarURL: string | undefined
  username: string | undefined
  usernameStyles?: TextProps
  isLoaded?: boolean
}

export const UserInfo = ({
  avatarURL,
  username,
  usernameStyles,
  isLoaded = true,
}: UserInfoProps) => (
  <Flex alignItems="center" gap={2}>
    {isLoaded ? (
      <>
        <UserAvatar avatarURL={avatarURL ?? ''} size="sm" />
        <Text {...usernameStyles}>{username}</Text>
      </>
    ) : (
      <>
        <SkeletonCircle />
        <SkeletonText noOfLines={1} skeletonHeight={4} w={16} />
      </>
    )}
  </Flex>
)
