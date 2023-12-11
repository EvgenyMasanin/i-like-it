import { RouteObject } from 'react-router-dom'
import { App } from 'src/components/app'
import {
  Categories,
  ContactUs,
  Error,
  Favorites,
  Home,
  Profile,
  Recommended,
  SuggestCategory,
} from 'src/pages'
import { Paths } from './paths'

export const rootChildren: RouteObject[] = [
  { path: Paths.categories, element: <Categories /> },
  {
    index: true,
    element: <Home />,
  },
  {
    path: Paths.contactUs,
    element: <ContactUs />,
  },
  {
    path: Paths.favorites,
    element: <Favorites />,
  },
  {
    path: Paths.profile,
    element: <Profile />,
  },
  {
    path: Paths.recommended,
    element: <Recommended />,
  },
  {
    path: Paths.suggestCategory,
    element: <SuggestCategory />,
  },
]

export const rotes: RouteObject[] = [
  {
    path: Paths.root,
    element: <App />,
    errorElement: <Error />,
    children: rootChildren,
  },
]
