import * as Yup from 'yup'

export const registerSchema = Yup.object().shape({
  fullname: Yup.string()
    .required('Este campo es requerido'),
  email: Yup.string()
    .required('Este campo es requerido')
    .email('El campo ingresado no es un correo válido'),
  password: Yup.string()
    .required('Ingrese la contraseña')
    .min(4, 'Debe tener mas de 4 caracteres')
    .max(16, 'No debe exceder de 16 caracteres'),
  'confirm-password': Yup.string()
    .required('Confirme la contraseña')
    .min(4, 'Debe tener mas de 4 caracteres')
    .max(16, 'No debe exceder de 16 caracteres')
    .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
})
