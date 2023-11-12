import { useEffect, useState } from 'react'
import { Product } from '@/interfaces/products.interface'
import { getAllProducts } from '@/services'

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchProducts = async () => {
    try {
      setIsLoading(true)
      const response = await getAllProducts()
      setProducts(response.products)
    } catch (error) {
      setProducts([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  
  return {
    products,
    isLoading
  }
}

export default useProducts
