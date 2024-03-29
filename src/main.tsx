import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Routes/Home.tsx';
import Projects from './Routes/Projects.tsx';

const router = createBrowserRouter([{
  path: "/",
  children: [{
    path: "/",
    element: <Home />
    },
    {
      path: "/Projects",
      element: <Projects />
    }
  ]
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
