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
    path: '/home', element: ProductList, label: 'Inicio'
  },
  {
    path: '/sell', element: Sell, label: 'Vender'
  },
  {
    path: '/register', element: Register, label: 'Registrarse' 
  },
  {
    path: '/login', element: Login, label: 'Ingresar' 
  }
]
