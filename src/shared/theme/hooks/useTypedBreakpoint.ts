import { useBreakpoint } from '@chakra-ui/react'
import { BreakPoints } from '..'

export const useTypedBreakpoint = () => useBreakpoint() as BreakPoints
