import { createApi } from '@reduxjs/toolkit/query/react'

import { getAuthorizationHeader } from '~/shared/lib'
import { ID } from '~/shared/types/id.interface'
import { HTTPMethod } from '~/shared/api/http-method.enum'
import { baseQueryWithReAuth } from '~/shared/api/base-query-with-re-auth'
import { PaginationParams, WithPagination } from '~/shared/types/pagination.interface'

import { CreateMemberDto, MemberDto, MemberFilterParams, UpdateMemberDto } from '../model/types'
import { MemberGallery } from '../model/types/member-gallery.interface'

enum Tag {
  member = 'Members',
}

export const membersApi = createApi({
  reducerPath: 'members',
  baseQuery: baseQueryWithReAuth('members'),
  tagTypes: [Tag.member],
  endpoints: (build) => ({
    createMember: build.mutation<MemberDto, CreateMemberDto>({
      query: (createMemberDto) => ({
        url: '',
        method: HTTPMethod.POST,
        body: createMemberDto,
        headers: getAuthorizationHeader('access'),
      }),
    }),
    findAllMembers: build.query<WithPagination<MemberDto>, PaginationParams>({
      query: (queryArg) => ({
        url: '',
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
      providesTags: [Tag.member],
    }),
    uploadMemberGallery: build.mutation<MemberGallery[], FormData>({
      query: (formData) => ({
        url: `/gallery/${formData.get('memberId')}`,
        method: HTTPMethod.POST,
        body: formData,
        headers: getAuthorizationHeader('access'),
      }),
    }),
    likeMember: build.mutation<MemberDto, number>({
      query: (id) => ({
        url: `/like/${id}`,
        method: HTTPMethod.PATCH,
        headers: getAuthorizationHeader('access'),
      }),
      invalidatesTags: [Tag.member],
    }),
    findAllMembersByFilter: build.query<WithPagination<MemberDto>, MemberFilterParams>({
      query: (queryArg) => ({
        url: `/filter`,
        params: {
          limit: queryArg.limit,
          offset: queryArg.offset,
          name: queryArg.name,
          authorId: queryArg.authorId,
          categoryId: queryArg.categoryId,
        },
      }),
      providesTags: (result) =>
        result
          ? [...result.data.map(({ id }) => ({ type: Tag.member as const, id })), Tag.member]
          : [Tag.member],
    }),
    findOneMember: build.query<MemberDto, ID>({
      query: (queryArg) => ({ url: `/${queryArg.id}` }),
      providesTags: [Tag.member],
    }),
    updateMember: build.mutation<MemberDto, { id: number; updateMemberDto: UpdateMemberDto }>({
      query: ({ id, updateMemberDto }) => ({
        url: `/${id}`,
        method: HTTPMethod.PATCH,
        body: updateMemberDto,
        headers: getAuthorizationHeader('access'),
      }),
    }),
    removeMember: build.mutation<null, ID>({
      query: (queryArg) => ({
        url: `/${queryArg.id}`,
        method: HTTPMethod.DELETE,
        headers: getAuthorizationHeader('access'),
      }),
    }),
  }),
})

export const {
  useFindAllMembersQuery,
  useFindAllMembersByFilterQuery,
  useLazyFindAllMembersByFilterQuery,
  useLikeMemberMutation,
} = membersApi
