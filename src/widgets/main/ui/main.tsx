import { Grid, GridProps } from '@chakra-ui/react'

import { ReactNode } from 'react'

export interface MainProps extends GridProps {
  children: ReactNode
}

export const Main = ({ children, ...props }: MainProps) => (
  <Grid
    as="main"
    templateColumns="auto 1fr"
    h="calc(100% - 48px)"
    w="full"
    maxW={{
      sm: 'full',
      lg: 'maxWidth',
    }}
    mx="auto"
    pt={2}
    gap={4}
    {...props}
    // justifyContent="space-between"
  >
    {children}
  </Grid>
)
