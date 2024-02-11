import { emptySplitApi as api } from '../empty-Api'

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    authControllerSignup: build.mutation<
      AuthControllerSignupApiResponse,
      AuthControllerSignupApiArg
    >({
      query: (queryArg) => ({ url: `/auth/signup`, method: 'POST', body: queryArg.authDto }),
    }),
    authControllerSignin: build.mutation<
      AuthControllerSigninApiResponse,
      AuthControllerSigninApiArg
    >({
      query: (queryArg) => ({ url: `/auth/signin`, method: 'POST', body: queryArg.authDto }),
    }),
    authControllerLogout: build.mutation<
      AuthControllerLogoutApiResponse,
      AuthControllerLogoutApiArg
    >({
      query: () => ({ url: `/auth/logout`, method: 'POST' }),
    }),
    authControllerRefreshTokens: build.query<
      AuthControllerRefreshTokensApiResponse,
      AuthControllerRefreshTokensApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/refresh`,
        headers: { authorization: queryArg.authorization },
      }),
    }),
    authControllerGetMe: build.query<AuthControllerGetMeApiResponse, AuthControllerGetMeApiArg>({
      query: (queryArg) => ({
        url: `/auth/me`,
        headers: { authorization: queryArg.authorization },
      }),
    }),
    userControllerFindAllByFilter: build.query<
      UserControllerFindAllByFilterApiResponse,
      UserControllerFindAllByFilterApiArg
    >({
      query: (queryArg) => ({
        url: `/users/filter`,
        params: { limit: queryArg.limit, offset: queryArg.offset, username: queryArg.username },
      }),
    }),
    userControllerFindAll: build.query<
      UserControllerFindAllApiResponse,
      UserControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/users`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    userControllerSetAvatar: build.mutation<
      UserControllerSetAvatarApiResponse,
      UserControllerSetAvatarApiArg
    >({
      query: (queryArg) => ({ url: `/users/set-avatar`, method: 'POST', body: queryArg.body }),
    }),
    userControllerFindOne: build.query<
      UserControllerFindOneApiResponse,
      UserControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.id}` }),
    }),
    userControllerUpdate: build.mutation<
      UserControllerUpdateApiResponse,
      UserControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.id}`,
        method: 'PATCH',
        body: queryArg.updateUserDto,
      }),
    }),
    userControllerRemove: build.mutation<
      UserControllerRemoveApiResponse,
      UserControllerRemoveApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.id}`, method: 'DELETE' }),
    }),
    roleControllerCreate: build.mutation<
      RoleControllerCreateApiResponse,
      RoleControllerCreateApiArg
    >({
      query: (queryArg) => ({ url: `/roles`, method: 'POST', body: queryArg.createRoleDto }),
    }),
    roleControllerFindAll: build.query<
      RoleControllerFindAllApiResponse,
      RoleControllerFindAllApiArg
    >({
      query: () => ({ url: `/roles` }),
    }),
    roleControllerGenerateBasicRoles: build.query<
      RoleControllerGenerateBasicRolesApiResponse,
      RoleControllerGenerateBasicRolesApiArg
    >({
      query: () => ({ url: `/roles/generate-basic-roles` }),
    }),
    roleControllerFindOne: build.query<
      RoleControllerFindOneApiResponse,
      RoleControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/roles/${queryArg.id}` }),
    }),
    roleControllerUpdate: build.mutation<
      RoleControllerUpdateApiResponse,
      RoleControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/roles/${queryArg.id}`,
        method: 'PATCH',
        body: queryArg.updateRoleDto,
      }),
    }),
    roleControllerRemove: build.mutation<
      RoleControllerRemoveApiResponse,
      RoleControllerRemoveApiArg
    >({
      query: (queryArg) => ({ url: `/roles/${queryArg.id}`, method: 'DELETE' }),
    }),
    categoriesControllerCreate: build.mutation<
      CategoriesControllerCreateApiResponse,
      CategoriesControllerCreateApiArg
    >({
      query: (queryArg) => ({ url: `/Categories`, method: 'POST', body: queryArg.body }),
    }),
    categoriesControllerFindAll: build.query<
      CategoriesControllerFindAllApiResponse,
      CategoriesControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/Categories`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    categoriesControllerFindAllByFilter: build.query<
      CategoriesControllerFindAllByFilterApiResponse,
      CategoriesControllerFindAllByFilterApiArg
    >({
      query: (queryArg) => ({
        url: `/Categories/filter`,
        params: {
          limit: queryArg.limit,
          offset: queryArg.offset,
          name: queryArg.name,
          authorId: queryArg.authorId,
          categoryId: queryArg.categoryId,
        },
      }),
    }),
    categoriesControllerFindOne: build.query<
      CategoriesControllerFindOneApiResponse,
      CategoriesControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/Categories/${queryArg.id}` }),
    }),
    categoriesControllerUpdate: build.mutation<
      CategoriesControllerUpdateApiResponse,
      CategoriesControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/Categories/${queryArg.id}`,
        method: 'PATCH',
        body: queryArg.updateCategoryDto,
      }),
    }),
    categoriesControllerRemove: build.mutation<
      CategoriesControllerRemoveApiResponse,
      CategoriesControllerRemoveApiArg
    >({
      query: (queryArg) => ({ url: `/Categories/${queryArg.id}`, method: 'DELETE' }),
    }),
    memberControllerCreate: build.mutation<
      MemberControllerCreateApiResponse,
      MemberControllerCreateApiArg
    >({
      query: (queryArg) => ({ url: `/members`, method: 'POST', body: queryArg.createMemberDto }),
    }),
    memberControllerFindAll: build.query<
      MemberControllerFindAllApiResponse,
      MemberControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/members`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    memberControllerUploadGallery: build.mutation<
      MemberControllerUploadGalleryApiResponse,
      MemberControllerUploadGalleryApiArg
    >({
      query: (queryArg) => ({
        url: `/members/gallery/${queryArg.memberId}`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    memberControllerLike: build.mutation<
      MemberControllerLikeApiResponse,
      MemberControllerLikeApiArg
    >({
      query: (queryArg) => ({ url: `/members/like/${queryArg.id}`, method: 'PATCH' }),
    }),
    memberControllerFindAllByFilter: build.query<
      MemberControllerFindAllByFilterApiResponse,
      MemberControllerFindAllByFilterApiArg
    >({
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
    memberControllerFindOne: build.query<
      MemberControllerFindOneApiResponse,
      MemberControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/members/${queryArg.id}` }),
    }),
    memberControllerUpdate: build.mutation<
      MemberControllerUpdateApiResponse,
      MemberControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/members/${queryArg.id}`,
        method: 'PATCH',
        body: queryArg.updateMemberDto,
      }),
    }),
    memberControllerRemove: build.mutation<
      MemberControllerRemoveApiResponse,
      MemberControllerRemoveApiArg
    >({
      query: (queryArg) => ({ url: `/members/${queryArg.id}`, method: 'DELETE' }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as iLikeItApi }
export type AuthControllerSignupApiResponse = /** status 201  */ AuthUserDto
export type AuthControllerSignupApiArg = {
  authDto: AuthDto
}
export type AuthControllerSigninApiResponse = /** status 200  */ AuthUserDto
export type AuthControllerSigninApiArg = {
  authDto: AuthDto
}
export type AuthControllerLogoutApiResponse = unknown
export type AuthControllerLogoutApiArg = void
export type AuthControllerRefreshTokensApiResponse = /** status 200  */ Tokens
export type AuthControllerRefreshTokensApiArg = {
  /** Bearer refresh token. */
  authorization?: string
}
export type AuthControllerGetMeApiResponse = /** status 200  */ AuthUserDto
export type AuthControllerGetMeApiArg = {
  /** Bearer access token. */
  authorization?: string
}
export type UserControllerFindAllByFilterApiResponse = /** status 200  */ WithPaginationUser7D
export type UserControllerFindAllByFilterApiArg = {
  limit?: number
  offset?: number
  username?: string
}
export type UserControllerFindAllApiResponse = /** status 200  */ User
export type UserControllerFindAllApiArg = {
  limit?: number
  offset?: number
}
export type UserControllerSetAvatarApiResponse = /** status 200  */ User
export type UserControllerSetAvatarApiArg = {
  /** Image in jpg format. */
  body: {
    fileName?: Blob
  }
}
export type UserControllerFindOneApiResponse = /** status 200  */ User
export type UserControllerFindOneApiArg = {
  id: string
}
export type UserControllerUpdateApiResponse = /** status 200  */ User
export type UserControllerUpdateApiArg = {
  id: string
  updateUserDto: UpdateUserDto
}
export type UserControllerRemoveApiResponse = unknown
export type UserControllerRemoveApiArg = {
  id: string
}
export type RoleControllerCreateApiResponse = unknown
export type RoleControllerCreateApiArg = {
  createRoleDto: CreateRoleDto
}
export type RoleControllerFindAllApiResponse = unknown
export type RoleControllerFindAllApiArg = void
export type RoleControllerGenerateBasicRolesApiResponse = unknown
export type RoleControllerGenerateBasicRolesApiArg = void
export type RoleControllerFindOneApiResponse = unknown
export type RoleControllerFindOneApiArg = {
  id: string
}
export type RoleControllerUpdateApiResponse = unknown
export type RoleControllerUpdateApiArg = {
  id: string
  updateRoleDto: UpdateRoleDto
}
export type RoleControllerRemoveApiResponse = unknown
export type RoleControllerRemoveApiArg = {
  id: string
}
export type CategoriesControllerCreateApiResponse = /** status 200  */ CreateCategoryDto
export type CategoriesControllerCreateApiArg = {
  /** Image in jpg format. */
  body: {
    fileName?: Blob
  }
}
export type CategoriesControllerFindAllApiResponse = /** status 200  */ WithPaginationCategoryDto7D
export type CategoriesControllerFindAllApiArg = {
  limit?: number
  offset?: number
}
export type CategoriesControllerFindAllByFilterApiResponse =
  /** status 200  */ WithPaginationCategoryDto7D
export type CategoriesControllerFindAllByFilterApiArg = {
  limit?: number
  offset?: number
  name?: string
  authorId?: number
  categoryId?: number
}
export type CategoriesControllerFindOneApiResponse = /** status 200  */ CategoryDto
export type CategoriesControllerFindOneApiArg = {
  id: string
}
export type CategoriesControllerUpdateApiResponse = /** status 200  */ UpdateCategoryDto
export type CategoriesControllerUpdateApiArg = {
  id: string
  updateCategoryDto: UpdateCategoryDto
}
export type CategoriesControllerRemoveApiResponse = unknown
export type CategoriesControllerRemoveApiArg = {
  id: string
}
export type MemberControllerCreateApiResponse = /** status 201  */ CreateMemberDto
export type MemberControllerCreateApiArg = {
  createMemberDto: CreateMemberDto
}
export type MemberControllerFindAllApiResponse = /** status 200  */ WithPaginationMemberDto7D
export type MemberControllerFindAllApiArg = {
  limit?: number
  offset?: number
}
export type MemberControllerUploadGalleryApiResponse = /** status 201  */ MemberGallery[]
export type MemberControllerUploadGalleryApiArg = {
  memberId: string
  /** Images in jpg format. */
  body: {
    fileName?: Blob
  }
}
export type MemberControllerLikeApiResponse = /** status 200  */ MemberDto
export type MemberControllerLikeApiArg = {
  id: string
}
export type MemberControllerFindAllByFilterApiResponse =
  /** status 200  */ WithPaginationMemberDto7D
export type MemberControllerFindAllByFilterApiArg = {
  limit?: number
  offset?: number
  name?: string
  authorId?: number
  categoryId?: number
}
export type MemberControllerFindOneApiResponse = /** status 200  */ MemberDto
export type MemberControllerFindOneApiArg = {
  id: string
}
export type MemberControllerUpdateApiResponse = /** status 200  */ UpdateMemberDto
export type MemberControllerUpdateApiArg = {
  id: string
  updateMemberDto: UpdateMemberDto
}
export type MemberControllerRemoveApiResponse = unknown
export type MemberControllerRemoveApiArg = {
  id: string
}
export type Role = {
  id: number
  name: string
  description: string
}
export type AuthUserDto = {
  email: string
  username: string
  accessToken: string
  refreshToken: string
  id: number
  avatarURL: string
  roles: Role[]
}
export type AuthDto = {
  email: string
  username: string
  password: string
}
export type Tokens = {
  accessToken: string
  refreshToken: string
}
export type User = {
  id: number
  email: string
  username: string
  avatarURL: string
  roles: Role[]
}
export type Pagination = {
  offset: number
  limit: number
  total: number
}
export type WithPaginationUser7D = {
  data: User[]
  pagination: Pagination
}
export type UpdateUserDto = {
  email?: string
  username?: string
  password?: string
  rolesId?: number[]
}
export type CreateRoleDto = {
  name: string
  description: string
}
export type UpdateRoleDto = {
  name?: string
  description?: string
}
export type CreateCategoryDto = {
  name: string
  description: string
  categoryImage: any
}
export type CategoryDto = {
  id: number
  name: string
  description: string
  imageUrl: string
  authorId: number
  authorAvatarURL: string
  authorName: string
}
export type WithPaginationCategoryDto7D = {
  data: CategoryDto[]
  pagination: Pagination
}
export type UpdateCategoryDto = {
  name?: string
  description?: string
  categoryImage?: any
}
export type CreateCharacteristicDto = {
  name: string
  rating: number
}
export type CreateMemberDto = {
  name: string
  description: string
  categoryId: number
  characteristics: CreateCharacteristicDto[]
}
export type Characteristic = {
  id: number
  name: string
  rating: number
}
export type MemberGallery = {
  id: number
  imageUrl: string
  isMain: boolean
}
export type MemberDto = {
  id: number
  name: string
  description: string
  categoryId: number
  authorId: number
  characteristics: Characteristic[]
  gallery: MemberGallery[]
  usersLikesIds: number[]
  likesCount: number
  authorAvatarURL: string
  authorName: string
  categoryName: string
}
export type WithPaginationMemberDto7D = {
  data: MemberDto[]
  pagination: Pagination
}
export type UpdateMemberDto = {
  name?: string
  description?: string
  categoryId?: number
  characteristics?: CreateCharacteristicDto[]
}
export const {
  useAuthControllerSignupMutation,
  useAuthControllerSigninMutation,
  useAuthControllerLogoutMutation,
  useAuthControllerRefreshTokensQuery,
  useAuthControllerGetMeQuery,
  useUserControllerFindAllByFilterQuery,
  useUserControllerFindAllQuery,
  useUserControllerSetAvatarMutation,
  useUserControllerFindOneQuery,
  useUserControllerUpdateMutation,
  useUserControllerRemoveMutation,
  useRoleControllerCreateMutation,
  useRoleControllerFindAllQuery,
  useRoleControllerGenerateBasicRolesQuery,
  useRoleControllerFindOneQuery,
  useRoleControllerUpdateMutation,
  useRoleControllerRemoveMutation,
  useCategoriesControllerCreateMutation,
  useCategoriesControllerFindAllQuery,
  useCategoriesControllerFindAllByFilterQuery,
  useCategoriesControllerFindOneQuery,
  useCategoriesControllerUpdateMutation,
  useCategoriesControllerRemoveMutation,
  useMemberControllerCreateMutation,
  useMemberControllerFindAllQuery,
  useMemberControllerUploadGalleryMutation,
  useMemberControllerLikeMutation,
  useMemberControllerFindAllByFilterQuery,
  useMemberControllerFindOneQuery,
  useMemberControllerUpdateMutation,
  useMemberControllerRemoveMutation,
} = injectedRtkApi
