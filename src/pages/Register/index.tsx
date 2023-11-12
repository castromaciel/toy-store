import { Controller } from 'react-hook-form'
import { useRegister } from '@/hooks'

const Register = () => {
  const { onSubmit, control } = useRegister()
  return (
    <form
      className="mx-auto my-5 col-12 col-lg-6"
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <Controller
        name="fullname"
        control={control}
        render={({ field, formState: { errors } }) => (
          <div className="form-floating mb-3 mx-auto">
            <input
              {...field}
              type="text"
              className="form-control"
              id="fullname"
              placeholder="Nombre y apellido"
            />
            <label htmlFor="fullname">
              Nombre y apellido
            </label>
            { errors.fullname && <p className="text-danger">{errors.fullname.message}</p> }
          </div>
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field, formState: { errors } }) => (
          <div className="form-floating mb-3 mx-auto">
            <input
              {...field}
              type="text"
              className="form-control"
              id="email"
              placeholder="Email/Usuario"
            />
            <label htmlFor="email">
              Email/Usuario
            </label>
            { errors.email && <p className="text-danger">{errors.email.message}</p> }
          </div>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field, formState: { errors } }) => (
          <div className="form-floating mb-3">
            <input
              {...field}
              type="password"
              className="form-control"
              id="password"
              placeholder="Contraseña"
            />
            <label htmlFor="password">Contraseña</label>
            { errors.password && <p className="text-danger">{errors.password.message}</p> }
          </div>
        )}
      />
      <Controller
        control={control}
        name="confirm-password"
        render={({ field, formState: { errors } }) => (
          <div className="form-floating mb-3">
            <input
              {...field}
              type="password"
              className="form-control"
              id="confirm-password"
              placeholder="Confirmar contraseña"
            />
            <label htmlFor="confirm-password">Confirmar contraseña</label>
            { errors['confirm-password'] && <p className="text-danger">{errors['confirm-password'].message}</p> }
          </div>
        )}
      />

      <div className="d-flex justify-content-center">
        <input
          type="submit"
          className="btn btn-outline-dark"
          value="Registrarse"
        />
      </div>
    </form>
  ) 
}

export default Register
