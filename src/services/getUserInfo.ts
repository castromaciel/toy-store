import axios from 'axios'
import { UserInfo } from '@/interfaces/userInfo.interface'

interface UserParams {
  token: string
}

interface ResponseUserInfo {
  users: UserInfo
}

export const getUserInfo = async ({
  token
}: UserParams): Promise<ResponseUserInfo> => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: token
    }
  }

  const response = await axios.get<ResponseUserInfo>('http://vps-3739175-x.dattaweb.com:4000/api/auth', config)
  return response.data
}
