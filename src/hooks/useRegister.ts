import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { registerSchema } from '@/validations'

interface UserRegisterData {
  fullname: string
  email: string
  password: string
  'confirm-password': string
}

const useRegister = () => {
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

  const onSubmit = (data: UserRegisterData): void => {
    console.log(data)
  }

  return {
    control,
    onSubmit: handleSubmit(onSubmit)
  }
}

export default useRegister
