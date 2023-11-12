import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { registerSchema } from '@/validations'
import { register } from '@/services/register'
import { showErrorToast } from '@/utils'
import useConsumerUserProvider from './useConsumerUserProvider'

interface UserRegisterData {
  fullname: string
  email: string
  password: string
  'confirm-password': string
}

const useRegister = () => {
  const { setUserAuthenticated } = useConsumerUserProvider()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const { handleSubmit, control } = useForm<UserRegisterData>({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      'confirm-password': ''
    },
    mode: 'onChange',
    delayError: 1200,
    resolver: yupResolver(registerSchema)
  })

  const onSubmit = async (data: UserRegisterData): Promise<void> => {
    try {
      setIsLoading(true)
      const { fullname: fullName, password, email } = data
      const body = {
        fullName,
        password,
        email
      }
      const { user } = await register({ body })

      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', user.token)

      setUserAuthenticated((prevState) => ({
        ...prevState,
        ...user,
        token: user.token
      }))
      navigate('/home')
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

export default useRegister
