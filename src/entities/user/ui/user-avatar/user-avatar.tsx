import { Avatar, AvatarProps } from '@chakra-ui/react'

import { getUrl } from '~/shared/lib'
import { useTypedSelector } from '~/shared/redux'
import { useBrandColor } from '~/shared/theme/hooks/useBrandColor'

import { selectUser } from '../../model/slices'

export interface UserAvatarProps extends AvatarProps {}

export const UserAvatar = (props: UserAvatarProps) => {
  const user = useTypedSelector(selectUser)
  const avatarSrc = user?.avatarURL ? getUrl(user.avatarURL) : ''

  return <Avatar backgroundColor={useBrandColor()} {...props} src={avatarSrc} />
}
