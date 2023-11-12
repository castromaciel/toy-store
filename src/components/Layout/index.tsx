import React, { ReactNode } from 'react'
import Footer from '../Footer'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
)

export default Layout
