import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { rotes } from './rotes'

export const AppRouter = () => {
  const router = createBrowserRouter(rotes)
  return <RouterProvider router={router} />
}
