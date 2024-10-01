import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import Home from '../Pages/Home'
import Projects from '../Pages/Projects'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
    ],
  },
])
