import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import AboutMe from './routes/AboutMe'
import Cv from './routes/Cv'
import Home from './routes/Home'
import Portfolio from './routes/Portfolio'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/aboutme', element: <AboutMe/> },
  { path: '/cv', element: <Cv/> },
  { path: '/portfolio', element: <Portfolio/>}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
