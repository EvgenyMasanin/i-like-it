import { Path } from '~/shared/paths'

import { FiCompass, FiHeart, FiPhone, FiTable, FiTrendingUp } from 'react-icons/fi'

import { LinkItemProps } from '.'

export const linkItems: LinkItemProps[] = [
  {
    name: 'Recommended',
    path: Path.recommended,
    icon: FiTrendingUp,
  },
  { name: 'Categories', path: Path.categories, icon: FiTable },
  { name: 'Suggest a category', path: Path.suggestCategory, icon: FiCompass },
  { name: 'Favorites', path: Path.favorites, icon: FiHeart },
  { name: 'Contact Us', path: Path.contactUs, icon: FiPhone },
]
