import { ProductListPage } from '@/pages'

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
  { path: '/product-list', element: ProductListPage, needsLayout: true }
]
