import React, {  useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'

export default function AddProduct() {
    
  
    const [error, setError] = useState('')
    const [categoryName, setCategoryName] = useState('')
    const navigate = useNavigate()

  

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!categoryName.trim()){
            setError('Category Name Is required')
            return
        }
        const res = await axios.post('http://localhost:3000/api/categories', {
            name: categoryName
        })
        console.log(res, "res")
        if(res.status === 201){
            navigate('/')
        }

        setError('')
    }
  return (
    <div className='p-8'>
        <Navbar />
        <form onSubmit={handleSubmit} className='p-4 rounded-lg border-2 border-black flex flex-col gap-4 mt-4'>
            <input 
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                name="name"
                type="text" 
                placeholder='Category Name' 
                className='border-2 border-black h-10 rounded-md'    
            />
            
            {error ? <p className='text-red-600'>{error}</p> : null}
            <button 
                className='p-3 bg-cyan-700 text-white font-bold'
            >
                Add Category
            </button>
        </form>
    </div>
  )
}
