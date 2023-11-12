import axios from 'axios'

export const getAllProducts = async () => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://vps-3739175-x.dattaweb.com:4000/api/product/getProducts?page=1',
    headers: { 
      'Content-Type': 'application/json'
    }
  }

  const response = await axios.request(config)
  return response.data
}
