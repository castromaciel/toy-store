import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { UserData } from '@/interfaces/userData.interface'
import { getUserInfo, login } from '@/services'
import { loginSchema } from '@/validations'
import useConsumerUserProvider from './useConsumerUserProvider'
import { showErrorToast } from '@/utils'

const useLogin = () => {
  const { setUserAuthenticated } = useConsumerUserProvider()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const { handleSubmit, control } = useForm<UserData>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange',
    delayError: 1200,
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = async (data: UserData): Promise<void> => {
    try {
      setIsLoading(true)
      const body = data
      const { token } = await login({ body })
      const { users } = await getUserInfo({ token })

      localStorage.setItem('user', JSON.stringify(users))
      localStorage.setItem('token', token)
      setUserAuthenticated((prevState) => ({
        ...prevState,
        ...users,
        token
      }))
      navigate('/sell')
    } catch (error: any) {
      showErrorToast(error?.response?.data?.error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    control,
    isLoading,
    onSubmit: handleSubmit(onSubmit)
  }
}

export default useLogin
