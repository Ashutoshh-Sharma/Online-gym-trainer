import React from 'react'
import logo from '../../assets/images/Logo-1.png'

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center gap-10 px-0 py-10 '>
      <img src={logo} alt="" />
      <h1 className='text-xl text-center'>Made with 🧡 by <a href="https://github.com/Ashutoshh-Sharma" target='__blank'><span className='text-red-600 cursor-pointer'>Ashutosh</span></a></h1>
      
    </div>
  )
}

export default Footer
