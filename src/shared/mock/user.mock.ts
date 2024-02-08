import { Tokens, User } from '@entities/user/types/user.types'

export const adminUser: User = {
  id: 65418,
  name: 'Frank',
  email: 'adminUser@gmail.com',
  photo:
    'https://images.unsplash.com/photo-1702140944199-5c321e5d5798?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  role: 'admin',
}
export const commonUser: User = {
  id: 84896,
  name: 'John',
  email: 'user@gmail.com',
  photo:
    'https://images.unsplash.com/photo-1702142006500-a1ea944a2a67?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  role: 'user',
}
export const guestUser: User = {
  id: 98749,
  name: 'Guest',
  email: '',
  photo:
    'https://images.unsplash.com/photo-1701014159251-f86a81a6fe13?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  role: 'guest',
}

export const mockTokens: Tokens = {
  accessToken: 'qwerty-access',
  refreshToken: 'qwerty-refresh',
}
