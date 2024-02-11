import { useTypedSelector } from '~/shared/redux'

import { selectUser } from '../../model/slices'

export interface UsernameProps {}

export const Username = ({}: UsernameProps) => {
  const user = useTypedSelector(selectUser)

  return user ? user.username : 'guest'
}
