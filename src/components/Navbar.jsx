import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container'>
        <NavLink to='/' className='btn btn-outline-primary'>
          Home
        </NavLink>
        <NavLink to='/characters' className='btn btn-outline-primary'>
          Characters
        </NavLink>
        <NavLink to='/profile' className='btn btn-outline-primary'>
          Profile
        </NavLink>
        <NavLink to= '/register' className='btn btn-outline-primary'>
          Register
        </NavLink>
    </div>
  </nav>
  )
}

export default Navbar