import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import AboutMe from './routes/AboutMe'
import Cv from './routes/Cv'
import Home from './routes/Home'
import Portfolio from './routes/Portfolio'
import './assets/tailwind.css'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/aboutme', element: <AboutMe /> },
  { path: '/cv', element: <Cv /> },
  { path: '/portfolio', element: <Portfolio /> },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

// TODO: Add a 404 page
// TODO: Check img sizes + loading
// TODO: Check how page loading (lighthouse)
// TODO: Check if all links work
// TODO: Check if all images have alt text
// TODO: Check if all images have title text