import axios from 'axios'
import { UserData } from '@/interfaces/userData.interface'

interface AuthParams {
  body: UserData
}

interface LoginResponse {
  token: string
}

export const login = async ({
  body
}: AuthParams):Promise<LoginResponse> => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  }
  
  const response = await axios.post<LoginResponse>('http://vps-3739175-x.dattaweb.com:4000/api/auth', {
    ...body
  }, config)

  return response.data
}
