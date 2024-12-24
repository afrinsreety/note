import React from 'react'

export default function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        LoginUser(email, password);
    }

    const LoginUser = async (email, password) => {
        try {
            const dataBody = {email, password, returnSecureToken: true};
            const urlSignup = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDXAwsDhK38AfoeO_zrwVb87qG01JUIpIE';
            const response = await fetch(urlSignup, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataBody)
            });
            const data = await response.json();
            console.log(data);

            // set a cooke for 60 minutes with data.idToken and set another for email
            const date = new Date();
            date.setTime(date.getTime() + (60 * 60 * 1000));
            document.cookie = `idToken=${data.idToken}; expires=${date.toUTCString()}`;
            document.cookie = `email=${data.email}; expires=${date.toUTCString()}`;
            document.cookie = `localId=${data.localId}; expires=${date.toUTCString()}`;

            window.location.href = '/';

        } catch (error) {
            console.error(error + 'error');
        }

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
