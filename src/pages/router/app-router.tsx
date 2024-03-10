import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useRoutes,
} from 'react-router-dom'
import { cloneElement, PropsWithChildren } from 'react'

import { routes } from './routes'

// const AppRoutes = () => {
//   // const router = createBrowserRouter(rotes)
//   const element = useRoutes(routes)
//   const location = useLocation()
//   if (!element) return null

//   return cloneElement(element, { key: location.pathname })
// }
// export const AppRouter = () => (
//   <BrowserRouter>
//     <AppRoutes />
//   </BrowserRouter>
// )
export const AppRouter = () => {
  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} />
}
