import { Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useLogin } from '@/hooks'

const Login = () => {
  const { control, onSubmit, isLoading } = useLogin()

  return (
    <form
      className="mx-auto my-5 col-12 col-lg-6"
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <Controller
        name="email"
        control={control}
        render={({ field, formState: { errors } }) => (
          <div className="form-floating mb-3 mx-auto">
            <input
              {...field}
              type="email"
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

      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-outline-dark"
          disabled={isLoading}
        >
          Iniciar Sesión
        </button>
      </div>
      
      <hr />

      <div className="d-flex justify-content-center">
        <Link
          to="/register"
          className={`${isLoading ? 'disabled' : ''} btn btn-outline-dark`}
        >
          Crear usuario
        </Link>
      </div>

    </form>
  ) 
}

export default Login
