import { useTypedLoaderData } from '@sheared/hooks/react-router-dom'

export interface ProfileProps {}

export const ProfilePage = ({}: ProfileProps) => {
  const { id } = useTypedLoaderData<{ id: number }>()
  return <div>Profile id: {id}</div>
}
