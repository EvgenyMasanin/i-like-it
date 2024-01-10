import { LoaderFunctionArgs, RouteObject } from 'react-router-dom'

import { getCategories } from '@sheared/mock/get-categories.mock'
import { getCategory } from '@sheared/mock/get-category.mock'
import { Path } from '@sheared/paths/paths'

import {
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
import { App } from './app'

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
    element: <App />,
    errorElement: <NotFoundPage />,
    children: rootChildren,
  },
]
