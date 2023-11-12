import axios from 'axios'
import { UserData } from '@/interfaces/userData.interface'

interface AuthParams {
  body: UserData
}

export const register = async ({
  body
}: AuthParams) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  }
  
  const response = await axios.post('http://vps-3739175-x.dattaweb.com:4000/api/users', {
    ...body
  }, config)

  return response.data
}
