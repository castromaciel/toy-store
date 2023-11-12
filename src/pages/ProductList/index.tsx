import { Card } from '@/components'
import { useProducts } from '@/hooks'

const ProductList = () => {
  const { products } = useProducts()
  
  return (
    <div className="my-4">
      <div className="row">
        {
          products?.map((product) => <Card {...product} />)
        }
      </div>
    </div>
  ) 
}

export default ProductList
