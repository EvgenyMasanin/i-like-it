import { Error } from '~/shared/ui'
import { UserInfo } from '~/entities/user/ui'
import { CategoryMembers } from '~/widgets/category-members/ui'
import { useRequiredParams } from '~/shared/hooks/react-router-dom'
import { useFindOneCategoryQuery } from '~/entities/category/api/category.api'

import { Compose } from './compose'

export interface CategoryProps {}

export const CategoryPage = () => {
  const { id } = useRequiredParams<{ id: string }>()

  const { data: category, isLoading, isError, error } = useFindOneCategoryQuery(+id)

  if (!isLoading && !category) return 'Category does not exist'

  if (isError) return <Error error={error} />

  const isLoaded = !isLoading && !!category

  return (
    <Compose
      isLoaded={isLoaded}
      name={category?.name}
      description={category?.description}
      author={
        <UserInfo
          isLoaded={isLoaded}
          avatarURL={category?.authorAvatarURL}
          username={category?.authorName}
          usernameStyles={{ fontSize: '3xl' }}
        />
      }
      members={<CategoryMembers categoryId={category?.id} />}
    />
  )
}
