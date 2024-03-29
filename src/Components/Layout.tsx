import Header from "../Components/Header";
import Footer from "../Components/Footer";

type LayoutProps = {
  children: React.ReactNode,
  smoothScrollTo?: (id: string) => void
}

const Layout = ({ children, smoothScrollTo }: LayoutProps) => {
  return (
    <>
        <Header 
          smoothScrollTo={smoothScrollTo && smoothScrollTo}
        />
        {children}
        <Footer />
    </>
  )
}

export default Layout