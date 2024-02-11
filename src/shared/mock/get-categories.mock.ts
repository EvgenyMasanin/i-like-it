/* eslint-disable boundaries/element-types */
/* eslint-disable no-nested-ternary */
import { CategoryDto } from '~/entities/category/model/types/category.interface'

import { imitateFetch } from './utils/imitateFetch'

const categories: Array<CategoryDto> = Array(130)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: `Category name ${i}`,
    description: `Description number ${i}`,
    imageUrl:
      i % 2 === 0
        ? 'https://plus.unsplash.com/premium_photo-1701083991041-16b72d10d2b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        : i % 3 === 1
        ? 'https://plus.unsplash.com/premium_photo-1701185652357-e9632c2b5969?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        : 'https://images.unsplash.com/photo-1700284290242-855332aa31e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }))

export const getCategories = () => imitateFetch(categories, '', 199)
