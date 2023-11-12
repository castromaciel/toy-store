import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Este campo es requerido')
    .email('El campo ingresado no es un correo válido'),
  password: Yup.string()
    .required('Ingrese la contraseña')
})
