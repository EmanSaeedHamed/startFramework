import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import About from './pages/About/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Portfolio from './pages/Portfolio/Portfolio.jsx'
import Contact from './pages/Contact/Contact.jsx'

const router = createBrowserRouter([
  {path: "/", element: < Home/>},
  {path: "/about", element: <About/>},
  {path: "/portfolio", element: <Portfolio/>},
  {path: "/contact", element: <Contact/>},
  {path: "*", element: < NotFound/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
