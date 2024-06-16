import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='border-2 rounded-md border-black p-4 flex gap-4'>
        <Link className='font-bold text-blue-600' to={'/'}>Categories</Link>
        <Link className='font-bold text-blue-600' to={'/movies'}>Movies</Link>
    </nav>
  )
}
