import React, { useContext } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LoginImg from '../assets/others/authentication2.png'
import { AuthContext } from '../providers/AuthProvider';
import { useForm } from "react-hook-form"

const Registration = () => {
    const { createUser } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        console.log(data)
        // createUser(email, password).then(res => {
        //     console.log(res.user)
        // })
    }
    return (
        <div className='bg-[url(/authentication.png)] min-h-screen'>
            <div className='pt-6 px-12'>
                <Link to="/"><FaArrowLeft /></Link>
            </div>
            <div className='flex min-h-[calc(100vh-112px)] justify-center items-center '>

                <div className='min-h-[calc(screen-80px)] flex justify-center items-center bg-[url(/authentication.png)] shadow-2xl'>
                    <div className='w-1/2'>
                        <img src={LoginImg} alt="" />
                    </div>
                    <div className="card-body flex items-center">
                        <h2 className='text-2xl font-bold text-center mt-6'>Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="fieldset w-sm">
                            <label className="fieldset-label">Name</label>
                            <input type="text"  {...register("name")} className="input w-full" placeholder="Name" name="name" />
                            <label className="fieldset-label">Email</label>
                            <input type="email" {...register("email", { required: true })} className="input w-full" placeholder="Email" name="email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" {...register("password", { required: true })} className="input w-full" placeholder="Password" name="password" />
                            <Link className='text-gray-600'>Forget password??</Link>
                            {errors.exampleRequired && <span>This field is required</span>}


                            <button className="btn bg-[#D1A054B3] mt-4">Sign Up</button>
                            <p className='text-[#D1A054B3] text-center font-semibold text-[16px] py-2'>Already registered? <a className='underline' href="/login">Go to log in</a></p>
                            <div className="divider">OR</div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Registration;