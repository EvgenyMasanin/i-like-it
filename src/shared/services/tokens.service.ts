import { storageService } from './storage.service'
import { Tokens } from '../types/tokens.interface'

class TokensService {
  private readonly ACCESS_TOKEN = 'access-token'

  private readonly REFRESH_TOKEN = 'refresh-token'

  setAccessToken(token: string) {
    storageService.set(this.ACCESS_TOKEN, token)
  }

  setRefreshToken(token: string) {
    storageService.set(this.REFRESH_TOKEN, token)
  }

  setTokens({ accessToken, refreshToken }: Tokens) {
    this.setAccessToken(accessToken)
    this.setRefreshToken(refreshToken)
  }

  getAccessToken() {
    return storageService.get<string>(this.ACCESS_TOKEN) ?? ''
  }

  getRefreshToken() {
    return storageService.get<string>(this.REFRESH_TOKEN) ?? ''
  }

  getToken(): Tokens {
    return {
      accessToken: this.getAccessToken(),
      refreshToken: this.getRefreshToken(),
    }
  }

  wipeTokens() {
    this.setAccessToken('')
    this.setRefreshToken('')
  }
}

export const tokensService = new TokensService()
