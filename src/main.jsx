import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SignUp from "./pages/SignUp.jsx"
import SignIn from "./pages/SignIn.jsx"
import About from "./pages/About.jsx"

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children :[
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "signup",
        element : <SignUp />
      },
      {
        path : "login",
        element : <SignIn />
      },
      {
        path : "about",
        element : <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
