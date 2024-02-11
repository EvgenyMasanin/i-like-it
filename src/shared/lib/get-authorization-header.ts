import { tokensService } from '../services/tokens.service'

export function getAuthorizationHeader(type: 'access' | 'refresh') {
  const token = type === 'access' ? tokensService.getAccessToken() : tokensService.getRefreshToken()

  return {
    authorization: `Bearer ${token}`,
  }
}
