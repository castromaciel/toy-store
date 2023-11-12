import {
  Login,
  ProductList,
  Register,
  Sell
} from '@/pages'

export const HOME_LINKS = [
  {
    src: '/vite.svg',
    href: 'https://vitejs.dev/',
    alt: 'Vite logo'
  },
  {
    src: '/vitest.svg',
    href: 'https://vitest.dev/',
    alt: 'Vitest logo'
  },
  {
    src: '/react.svg',
    href: 'https://react.dev/',
    alt: 'React logo'
  }
]

export const ROUTES = [
  {
    path: '/', element: ProductList, label: 'Inicio', isPrivate: false
  },
  {
    path: '/sell', element: Sell, label: 'Vender', isPrivate: true
  },
  {
    path: '/register', element: Register, label: 'Registrarse', isPrivate: false
  },
  {
    path: '/login', element: Login, label: 'Ingresar', isPrivate: false
  }
]
