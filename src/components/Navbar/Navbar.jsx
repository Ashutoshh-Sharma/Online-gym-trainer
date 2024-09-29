import React from 'react'
import logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' flex gap-10 items-center px-8 py-6 sm:gap-20 sm:px-10 sm:py-6 lg:px-12 lg:py-12'>
      <img src={logo} alt="" />
      <div className="links flex gap-8 text-lg sm:gap-12 lg:text-2xl">
        <Link to="/" className='border-b-2 border-red-500 lg:border-b-4'>Home</Link>
        <a href="#exercises">Exercises</a>
      </div>
    </div>
  )
}

export default Navbar
