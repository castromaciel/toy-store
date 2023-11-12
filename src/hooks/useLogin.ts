import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { loginSchema } from '@/validations'

interface UserData {
  email: string
  password: string
}

const useLogin = () => {
  const { handleSubmit, control } = useForm<UserData>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange',
    delayError: 1200,
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = (data: UserData): void => {
    console.log(data)
  }

  return {
    control,
    onSubmit: handleSubmit(onSubmit)
  }
}

export default useLogin
