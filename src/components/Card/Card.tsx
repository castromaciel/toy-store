import { Link } from 'react-router-dom'

interface CardProps {
  title: string,
  image: string,
  price: number,
  description: string,
  id: string
}

const Card = ({
  title, image, price, description, id 
}: CardProps) => (
  <Link to={`/product-detail/${id}`} className="text-decoration-none col-3 mb-4">
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">
          $
          {price}
        </h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </Link>
)

export default Card
