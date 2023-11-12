import axios from 'axios'
import { UserData } from '@/interfaces/userData.interface'
import { UserInfo } from '@/interfaces/userInfo.interface'

interface AuthParams {
  body: UserData
}

interface RegisterUserInfo extends UserInfo {
  token: string
}

interface RegisterResponse {
  user: RegisterUserInfo
}

export const register = async ({
  body
}: AuthParams):Promise<RegisterResponse> => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  }
  
  const response = await axios.post<RegisterResponse>('http://vps-3739175-x.dattaweb.com:4000/api/users', {
    ...body
  }, config)

  return response.data
}
