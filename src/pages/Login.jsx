import React from 'react';
import useDynamicTitle from '../hooks/useDynamicTitle';
import LoginImg from '../assets/others/authentication2.png'


const Login = () => {
    useDynamicTitle('Login')
    return (
        <div className='min-h-screen flex justify-center items-center bg-[url(/authentication.png)]'>
            <div className='min-h-[calc(screen-80px)] flex justify-center items-center bg-[url(/authentication.png)] shadow-2xl'>
                <div className="card-body flex items-center">
                    <h2 className='text-2xl font-bold text-center mt-6'>Please Login</h2>
                    <form className="fieldset w-sm">
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input w-full" placeholder="Email" name="email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input w-full" placeholder="Password" name="password" />
                        <input type="password" className="input mt-3 w-full" placeholder="Recapcha" name="password" />
                        <label className="fieldset-label text-[#5D5FEF] font-semibold">Reload Recapcha</label>
                        <input type="password" className="input w-full" placeholder="Enter Recapcha" name="password" />
                        <button className="btn bg-[#D1A054B3] mt-4">Login</button>
                        <div className="divider">OR</div>
                    </form>
                </div>
                <div className='w-1/2'>
                    <img src={LoginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;