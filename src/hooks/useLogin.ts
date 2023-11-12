import { useForm } from 'react-hook-form'

interface UserData {
  email: string
  password: string
}

const useLogin = () => {
  const { handleSubmit, control } = useForm<UserData>({
    defaultValues: {
      email: '',
      password: ''
    }
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
