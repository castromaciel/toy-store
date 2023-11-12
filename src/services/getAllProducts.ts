import axios from 'axios'
import { Product } from '@/interfaces/products.interface'

interface ProductResponse {
  products: Product[]
}

export const getAllProducts = async ():Promise<ProductResponse> => {
  const response = await axios.get<ProductResponse>('http://vps-3739175-x.dattaweb.com:4000/api/product/getProducts?page=1')
  return response.data
}
