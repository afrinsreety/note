import React from 'react'
import { registerUser } from '../../api/auth';

export default function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        registerUser(email, password);
    }

    
  return (
    <div className='container'>
        <h1 className='font-bold text-2xl mb-5'>Register</h1>
        <form onSubmit={handleSubmit}>
            <div className='mb-5'>
                <label className='block font-semibold' htmlFor="email">Email: </label>
                <input className='w-full h-10' type="email" name="email" required />
            </div>

            <div>
                <label className='block font-semibold'>Password: </label>
                <input className='w-full h-10' type="password" name="password" required />
            </div>

            <div>
                <button className='h-10 w-full flex justify-center items-center bg-green-800 mt-5 text-white font-semibold'>Register</button>
            </div>

        </form>
        
    </div>
  )
}
