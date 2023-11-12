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
      { data?.title && <h5>{data.title}</h5>}
      { data?.price && (
      <h6>
        $
        {data.price}
      </h6>
      )}
      { data?.description && <p>{data.description}</p> }
    </div>
  </div>
)
