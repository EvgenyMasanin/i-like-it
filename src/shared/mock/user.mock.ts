/* eslint-disable boundaries/element-types */
import { User } from '~/entities/user/model/types/user.interface'

import { Tokens } from '../types/tokens.interface'

export const adminUser: User = {
  id: 65418,
  username: 'Frank',
  email: 'adminUser@gmail.com',
  avatarURL:
    'https://images.unsplash.com/photo-1702140944199-5c321e5d5798?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  roles: ['admin'],
}
export const commonUser: User = {
  id: 84896,
  username: 'John',
  email: 'user@gmail.com',
  avatarURL:
    'https://images.unsplash.com/photo-1702142006500-a1ea944a2a67?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  roles: ['user'],
}
export const guestUser: User = {
  id: 98749,
  username: 'Guest',
  email: '',
  avatarURL:
    'https://images.unsplash.com/photo-1701014159251-f86a81a6fe13?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  roles: ['guest'],
}

export const mockTokens: Tokens = {
  accessToken: 'qwerty-access',
  refreshToken: 'qwerty-refresh',
}
