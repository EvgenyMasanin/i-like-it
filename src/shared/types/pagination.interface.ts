export interface Pagination {
  offset: number
  limit: number
  total: number
}

export interface WithPagination<T extends object> {
  data: T[]
  pagination: Pagination
}

export interface PaginationParams {
  offset?: number
  limit?: number
}
