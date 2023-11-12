import { Card } from '@/components'
import { PRODUCTS } from '@/mocks/products'

const ProductList = () => (
  <div className="my-4">
    <div className="row">
      {
        PRODUCTS.map((product) => <Card {...product} />)
      }
    </div>
  </div>
)

export default ProductList
