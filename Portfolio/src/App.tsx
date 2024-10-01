import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Layout from './Components/Layout'

function App() {
  return (
    <>
      <ToastContainer 
        pauseOnHover
        closeOnClick
      />
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}

export default App
