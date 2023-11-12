interface IVisualizacionProps {
  data: {
    image: string;
    title: string;
    price: number;
    description: string;
  };
}

export const Preview = ({ data }: IVisualizacionProps) => (
  <div className="row ms-4">
    <div className="me-3 col-6">
      <img src={data.image} alt="Visualización" width="100%" />
    </div>
    <div className="col-6">
      <h3>{data.title}</h3>
      <p>
        $
        {data.price}
      </p>
      <p>{data.description}</p>
    </div>
  </div>
)
