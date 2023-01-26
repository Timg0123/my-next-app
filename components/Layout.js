import Footer from './Footer'
import Navbar from './navbar/Navbar'

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
export default Layout
