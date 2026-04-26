import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='fixed flex items-center justify-between w-screen bg-linear-to-b from-black z-10 py-5'>
      <h1 className='font-bold m-4 text-2xl'>My App</h1>

      <div className='flex mr-36'>
      <p className='m-4'>About</p>
      <p className='m-4'>Contact</p>

      <Link to="/cart"><button className='ml-8 bg-gray-700 px-3 py-3 rounded-2xl cursor-pointer'>Cart</button></Link>
      </div>  
      
    </div>
  )
}

export default Header
