import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import App from './App.jsx'
import Home from './Pages/Home'
import Todo from './Pages/Todo'
import Profile from './Pages/Profile'

const token = localStorage.getItem('token')

// Idhar protected routes lagaye huewe hain. Aur ./Components/Header/Header.jsx mein bhi check horaha hai navbar pe.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      {token ? (
        <>
        <Route path='todo' element={<Todo/>}/>
        <Route path='profile' element={<Profile/>}/>
      </>) : (
        
        <>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
      </>
      )}
      <Route path='*' element={<h1>404 Page Not Found</h1>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
