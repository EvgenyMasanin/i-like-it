import { Path } from '~/shared/paths/paths'
import { getCategory } from '~/shared/mock/get-category.mock'
import { getCategories } from '~/shared/mock/get-categories.mock'

import { LoaderFunctionArgs, RouteObject } from 'react-router-dom'

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
    loader: getCategories,
    children: [
      {
        path: `${Path.category}/:id`,
        element: <CategoryPage />,
        loader: ({ params }: LoaderFunctionArgs<{ id: number }>) => getCategory(Number(params.id)),
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
  { path: Path.auth, element: <AuthPage /> },
]
