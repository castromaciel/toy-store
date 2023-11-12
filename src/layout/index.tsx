import { FC, ReactNode } from 'react'
import { Footer, Header, TermsAndConditionsModal } from '@/components'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="main-layout">
    <Header />

    <div className="container-fluid mx-auto content">
      {children}
    </div>

    <Footer />
    <TermsAndConditionsModal />
  </div>
)

export default Layout
