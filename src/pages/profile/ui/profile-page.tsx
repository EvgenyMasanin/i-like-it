import { useTypedLoaderData } from '~/shared/hooks/react-router-dom'

export const ProfilePage = () => {
  const { id } = useTypedLoaderData<{ id: number }>()
  return <div>Profile id: {id}</div>
}
