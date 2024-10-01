import { ReactElement } from 'react'

import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
