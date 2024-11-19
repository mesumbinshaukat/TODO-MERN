import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Header({token, setToken}) {
  const redirect = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink><Link className="navbar-brand" to="/">Navbar</Link></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
       
       {token ? (
        <>
      <li className="nav-item">
          <NavLink className="nav-link" to="/todo">Todo</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">profile</NavLink>
        </li>
        <li className="nav-item">
         <button className='btn btn-danger text-right' type="button" onClick={() => {
          setToken(null)
          redirect('/login')
         }}>Logout</button>
        </li>
        </>
       ) : (
        <>
         <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
      
        </>
)}
       
      </ul>
     
    </div>
  </div>
</nav>
    )
}

export default Header