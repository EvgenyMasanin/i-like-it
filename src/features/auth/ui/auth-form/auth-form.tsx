import { useParams } from 'react-router-dom'

import { SigninForm, SignupForm } from '..'

export const AuthForm = () => {
  const { action } = useParams<{ action: 'signin' | 'signup' }>()

  return action === 'signin' ? <SigninForm /> : <SignupForm />
}
