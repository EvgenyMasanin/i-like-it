import { Button, ButtonProps } from '@chakra-ui/react'

import { useLogoutMutation } from '../../api/endpoints'

export interface LogoutButtonProps extends ButtonProps {}

export const LogoutButton = (props: LogoutButtonProps) => {
  const [logout] = useLogoutMutation()

  return (
    <Button {...props} onClick={() => logout(null)}>
      LogoutButton
    </Button>
  )
}
