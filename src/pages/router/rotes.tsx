import { Path } from '~/shared/paths/paths'

import { RouteObject } from 'react-router-dom'

import {
  AuthPage,
  Categories,
  CategoryPage,
  ContactUsPage,
  FavoritesPage,
  HomePage,
  NotFoundPage,
  ProfilePage,
  RecommendedPage,
  SuggestCategoryPage,
} from '..'
import { Root } from './root'

export const rootChildren: RouteObject[] = [
  {
    path: Path.categories,
    element: <Categories />,

    children: [
      {
        path: `${Path.category}/:id`,
        element: <CategoryPage />,
      },
    ],
  },
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: Path.contactUs,
    element: <ContactUsPage />,
  },
  {
    path: Path.favorites,
    element: <FavoritesPage />,
  },
  {
    path: Path.profile,
    element: <ProfilePage />,
  },
  {
    path: `${Path.profile}/:id`,
    loader: ({ params }) => params,
    element: <ProfilePage />,
  },

  {
    path: Path.recommended,
    element: <RecommendedPage />,
  },
  {
    path: Path.suggestCategory,
    element: <SuggestCategoryPage />,
  },
]

export const rotes: RouteObject[] = [
  {
    path: Path.root,
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: rootChildren,
  },
  { path: `${Path.auth}/:action`, element: <AuthPage /> },
]
