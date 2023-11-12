import { FC, ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import { Footer, Header, TermsAndConditionsModal } from '@/components'

import 'react-toastify/dist/ReactToastify.css'
import { UserProvider } from '@/providers'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="main-layout">
    <UserProvider>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="container-fluid mx-auto content">
        {children}
      </div>

      <Footer />
      <TermsAndConditionsModal />
    </UserProvider>

  </div>
)

export default Layout
