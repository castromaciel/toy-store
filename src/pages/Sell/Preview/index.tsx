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
      { data?.image && <img src={data.image} alt="Visualización" width="100%" /> }
    </div>
    <div className="col-5">
      { data?.title && <h3>{data.title}</h3>}
      { data?.price && (
      <p>
        $
        {data.price}
      </p>
      )}
      { data?.description && <p>{data.description}</p> }
    </div>
  </div>
)
