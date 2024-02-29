import { AvatarProps } from '@chakra-ui/react'

import { useTypedSelector } from '~/shared/redux'

import { UserAvatar } from '..'
import { selectUserAvatarURL } from '../../model/slices'

export interface CurrentUserAvatarProps extends AvatarProps {}

export const CurrentUserAvatar = (props: CurrentUserAvatarProps) => {
  const avatarURL = useTypedSelector(selectUserAvatarURL)

  return <UserAvatar avatarURL={avatarURL} {...props} />
}
