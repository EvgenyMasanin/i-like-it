export type Role = 'admin' | 'user' | 'guest'

export interface User {
  id: number
  photo: string
  email: string
  name: string
  role: Role
}

export interface Tokens {
  accessToken: string
  refreshToken: string
}
