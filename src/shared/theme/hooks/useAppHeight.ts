// import { useTypedBreakpoint } from '.'

export const useAppHeight = () => {
  // const bp = useTypedBreakpoint()

  const mainHeight = 'full'
  const headerHeight = '48px'
  // const mainHeight = bp === '2xl' ? '93vh' : '90vh'
  // const headerHeight = bp === '2xl' ? '7vh' : '10vh'

  return {
    mainHeight,
    headerHeight,
  }
}
