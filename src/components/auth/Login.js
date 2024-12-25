import React from 'react'
import { LoginUser } from '../../api/auth';

export default function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        LoginUser(email, password);
    }

   
  return (
    <div className='container'>
        <h1 className='font-bold text-2xl mb-5'>Login</h1>
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
                <button className='h-10 w-full flex justify-center items-center bg-green-800 mt-5 text-white font-semibold'>Login</button>
            </div>

        </form>
        
    </div>
  )
}
