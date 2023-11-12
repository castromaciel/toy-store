import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { getDescription } from '@/services/gpt'

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

export const SaveForm = ({ onFormSubmit, formData }: any) => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register, handleSubmit, setValue, formState: { errors } 
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  const handleOnBlur = async (event:any) => {
    const { name, value } = event.target

    setIsLoading(true)
    if (name === 'title') {
      try {
        const response = await getDescription({ title: value })
        const IAResponse = response.products.replace(/^"|"$/g, '')
        setValue('description', IAResponse)
        onFormSubmit({
          ...formData,
          description: IAResponse,
          title: value
        })
      } catch (error) {
        console.error(error)
      }

      setIsLoading(false)
      return
    }

    setValue(name, value)
    onFormSubmit({
      ...formData,
      [name]: value
    })
    setIsLoading(false)
  }
  
  return (
    <form className="d-flex flex-column" onSubmit={handleSubmit(onFormSubmit)}>
      <div className="mb-1">
        <label htmlFor="title" className="form-label">Titulo</label>
        <input type="text" {...register('title')} className="form-control" id="title" name="title" onBlur={handleOnBlur} />
        <p className="text-danger">{errors.title?.message}</p>
      </div>
      <div className="mb-1">
        <label htmlFor="image" className="form-label">Imagen</label>
        <input type="text" {...register('image')} className="form-control" id="image" name="image" onBlur={handleOnBlur} />
        <p className="text-danger">{errors.image?.message}</p>
      </div>
      <div className="mb-1">
        <label htmlFor="price" className="form-label">Precio</label>
        <input type="text" {...register('price')} className="form-control" id="price" name="price" onBlur={handleOnBlur} />
        <p className="text-danger">{errors.price?.message}</p>
      </div>
      <div className="mb-1">
        <label htmlFor="description" className="form-label">Descripcion</label>
        <textarea {...register('description')} className="form-control" id="description" name="description" onBlur={handleOnBlur} placeholder={isLoading ? 'Generando descripcion...' : ''} />
        <p className="text-danger">{errors.description?.message}</p>
      </div>
    </form>
  )
}
