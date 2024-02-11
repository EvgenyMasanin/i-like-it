import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { PaginationParams, WithPagination } from '~/shared/types/pagination.interface'

import { CreateMemberDto, MemberDto, MemberFilterParams, UpdateMemberDto } from '../model/types'
import { MemberGallery } from '../model/types/member-gallery.interface'

export const membersApi = createApi({
  reducerPath: 'members',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (build) => ({
    createMember: build.mutation<MemberDto, CreateMemberDto>({
      query: (createMemberDto) => ({
        url: `/members`,
        method: 'POST',
        body: createMemberDto,
      }),
    }),
    findAllMembers: build.query<WithPagination<MemberDto>, PaginationParams>({
      query: (queryArg) => ({
        url: `/members`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    uploadMemberGallery: build.mutation<MemberGallery[], FormData>({
      query: (formData) => ({
        url: `/members/gallery/${formData.get('memberId')}`,
        method: 'POST',
        body: formData,
      }),
    }),
    likeMember: build.mutation<MemberDto, { id: number }>({
      query: (queryArg) => ({ url: `/members/like/${queryArg.id}`, method: 'PATCH' }),
    }),
    findAllMembersByFilter: build.query<WithPagination<MemberDto>, MemberFilterParams>({
      query: (queryArg) => ({
        url: `/members/filter`,
        params: {
          limit: queryArg.limit,
          offset: queryArg.offset,
          name: queryArg.name,
          authorId: queryArg.authorId,
          categoryId: queryArg.categoryId,
        },
      }),
    }),
    findOneMember: build.query<MemberDto, { id: number }>({
      query: (queryArg) => ({ url: `/members/${queryArg.id}` }),
    }),
    updateMember: build.mutation<MemberDto, { id: number; updateMemberDto: UpdateMemberDto }>({
      query: ({ id, updateMemberDto }) => ({
        url: `/members/${id}`,
        method: 'PATCH',
        body: updateMemberDto,
      }),
    }),
    removeMember: build.mutation<null, { id: number }>({
      query: (queryArg) => ({ url: `/members/${queryArg.id}`, method: 'DELETE' }),
    }),
  }),
})

export const { useFindAllMembersQuery } = membersApi
