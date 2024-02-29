import { Avatar, AvatarProps } from '@chakra-ui/react'

import { getUrl } from '~/shared/lib'
import { useBrandColor } from '~/shared/theme/hooks/useBrandColor'

export interface UserAvatarProps extends AvatarProps {
  avatarURL: string
}

export const UserAvatar = ({ avatarURL, ...props }: UserAvatarProps) => {
  const avatarSrc = getUrl(avatarURL)

  return <Avatar backgroundColor={useBrandColor()} {...props} src={avatarSrc} />
}
