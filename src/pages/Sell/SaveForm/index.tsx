import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface IFormInput {
  image: string;
  title: string;
  price: number;
  description: string;
}

const schema = yup.object({
  image: yup.string().required('Este campo es requerido'),
  title: yup.string().required('Este campo es requerido'),
  price: yup.number().positive().integer().required('Este campo es requerido'),
  description: yup.string().required('Este campo es requerido')
}).required()

export const SaveForm = ({ onFormSubmit }: { onFormSubmit: SubmitHandler<IFormInput> }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="d-flex flex-column">
      <div className="mb-1">
        <label htmlFor="image" className="form-label">Imagen</label>
        <input type="text" {...register('image')} className="form-control" id="image" />
        <p className="text-danger">{errors.image?.message}</p>
      </div>
      <div className="mb-1">
        <label htmlFor="title" className="form-label">Titulo</label>
        <input type="text" {...register('title')} className="form-control" id="title" />
        <p className="text-danger">{errors.title?.message}</p>
      </div>
      <div className="mb-1">
        <label htmlFor="price" className="form-label">Precio</label>
        <input type="text" {...register('price')} className="form-control" id="price" />
        <p className="text-danger">{errors.price?.message}</p>
      </div>
      <div className="mb-1">
        <label htmlFor="description" className="form-label">Descripcion</label>
        <textarea {...register('description')} className="form-control" id="description" />
        <p className="text-danger">{errors.description?.message}</p>
      </div>
      <button type="submit" className="btn btn-outline-dark">Visualizar</button>
    </form>
  )
}
