import { Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useLogin } from '@/hooks'

const Login = () => {
  const { control, onSubmit } = useLogin()

  return (
    <form
      className="mx-auto my-5 col-12 col-lg-6"
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <div className="form-floating mb-3 mx-auto">
            <input
              {...field}
              type="email"
              className="form-control"
              id="email"
              placeholder="Email/Usuario"
              required
            />
            <label htmlFor="email">
              Email/Usuario
            </label>
          </div>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <div className="form-floating mb-3">
            <input
              {...field}
              type="password"
              className="form-control"
              id="password"
              placeholder="Contraseña"
              required
            />
            <label htmlFor="password">Contraseña</label>
          </div>
        )}
      />

      <div className="d-flex justify-content-center">
        <input
          type="submit"
          className="btn btn-outline-dark"
          value="Iniciar Sesión"
        />
      </div>
      
      <hr />

      <div className="d-flex justify-content-center">
        <Link
          to="/register"
          className="btn btn-outline-dark"
        >
          Crear usuario
        </Link>
      </div>

    </form>
  ) 
}

export default Login
