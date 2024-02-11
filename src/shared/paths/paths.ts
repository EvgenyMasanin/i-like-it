export enum Path {
  root = '/',
  auth = 'auth',
  home = 'home',
  profile = 'profile',
  favorites = 'favorites',
  contactUs = 'contact-us',
  categories = 'categories',
  category = 'category',
  recommended = 'recommended',
  suggestCategory = 'suggest-a-category',
}

export const root = (path: Path, param?: string) => `${Path.root}${path}/${param}`
