import { createApi } from '@reduxjs/toolkit/query/react'

import { getAuthorizationHeader } from '~/shared/lib'
import { ID } from '~/shared/types/id.interface'
import { HTTPMethod } from '~/shared/api/http-method.enum'
import { baseQueryWithReAuth } from '~/shared/api/base-query-with-re-auth'
import { PaginationParams, WithPagination } from '~/shared/types/pagination.interface'

import {
  CategoryDto,
  CategoryFilterParams,
  CreateCategoryDto,
  UpdateCategoryDto,
} from '../model/types/category.interface'

export const categoryApi = createApi({
  reducerPath: 'category',
  baseQuery: baseQueryWithReAuth('categories'),
  endpoints: (build) => ({
    createCategory: build.mutation<CategoryDto, CreateCategoryDto>({
      query: (queryArg) => ({
        url: '',
        method: HTTPMethod.POST,
        body: queryArg,
        headers: getAuthorizationHeader('access'),
      }),
    }),
    findAllCategories: build.query<WithPagination<CategoryDto>, PaginationParams>({
      query: (queryArg) => ({
        url: '',
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    findAllCategoriesByFilter: build.query<WithPagination<CategoryDto>, CategoryFilterParams>({
      query: (queryArg) => ({
        url: '/filter',
        params: {
          limit: queryArg.limit,
          offset: queryArg.offset,
          name: queryArg.name,
          authorId: queryArg.authorId,
          categoryId: queryArg.categoryId,
        },
      }),
    }),
    findOneCategory: build.query<CategoryDto, number>({
      query: (id) => ({ url: `/${id}` }),
    }),
    updateCategory: build.mutation<CategoryDto, ID & UpdateCategoryDto>({
      query: ({ id, ...updateCategoryDto }) => ({
        url: `/${id}`,
        method: HTTPMethod.PATCH,
        body: updateCategoryDto,
        headers: getAuthorizationHeader('access'),
      }),
    }),
    removeCategory: build.mutation<null, number>({
      query: (id) => ({
        url: `/${id}`,
        method: HTTPMethod.DELETE,
        headers: getAuthorizationHeader('access'),
      }),
    }),
  }),
})

export const {
  useFindAllCategoriesQuery,
  useCreateCategoryMutation,
  useFindAllCategoriesByFilterQuery,
  useFindOneCategoryQuery,
  useUpdateCategoryMutation,
} = categoryApi
