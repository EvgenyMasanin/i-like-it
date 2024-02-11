export type Role = 'admin' | 'user' | 'guest'

export interface User {
  id: number
  email: string
  username: string
  avatarURL: string
  roles: Role[]
}

export interface AuthUserDto {
  email: string
  username: string
  accessToken: string
  refreshToken: string
  id: number
  avatarURL: string
  roles: Role[]
}

export interface AuthDto {
  email: string
  password: string
}
