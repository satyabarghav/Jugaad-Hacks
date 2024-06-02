import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Markdown from 'react-markdown'
import axios from 'axios'
import { Button } from './components/ui/button'
import NavbarDemo from './components/user/NavbarDemo'
import { RouterProvider, createBrowserRouter,BrowserRouter as Rooter } from 'react-router-dom'
import Hero from './components/user/Hero'
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <App/>
  //   }
  // ])
  const [count, setCount] = useState(0)
  const [message,setMessage] = useState("")
  const handleSubmit = async () => {
    const data = await axios.get("http://127.0.0.1:5000/generate")
    setMessage(data.data.message)
    console.log(data)
  }
  return (
    <>
      {/* <RouterProvider router={router}/> */}
      <Rooter>
      <NavbarDemo/>
      <Hero/>
      </Rooter>
      
    </>
  )
}

export default App
