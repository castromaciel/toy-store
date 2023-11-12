import { FC, ReactNode } from 'react'
import { Footer, Header } from '@/components'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="main-layout">
    <Header />

    <div className="container-fluid">
      {children}
    </div>

    <Footer />
  </div>
)

export default Layout
