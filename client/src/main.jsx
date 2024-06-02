import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter,BrowserRouter as Rooter } from 'react-router-dom'
import About from './Pages/AboutUs.jsx'
import Contact from './Pages/Contact.jsx'
import Services from './Pages/Services.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  
  },
  {
    path: "/services",
    element: <Services/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
