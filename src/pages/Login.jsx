import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import useDynamicTitle from '../hooks/useDynamicTitle';
import LoginImg from '../assets/others/authentication2.png'
import correct from '/correct.png'
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProvider';


const Login = () => {
    useDynamicTitle('Login')
    const { signIn } = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6, 'transparent');
    }, [])

    const handleChange = e => {
        if (e.target.value.length === 6) {
            if (validateCaptcha(e.target.value)) {
                setDisabled(false);
            }
        }
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password).then(res => {
            console.log(res.user)
        })
    }

    return (
        <div className='bg-[url(/authentication.png)] min-h-screen'>
            <div className='pt-6 px-12'>
                <Link to="/"><FaArrowLeft /></Link>
            </div>
            <div className='flex min-h-[calc(100vh-112px)] justify-center items-center '>

                <div className='min-h-[calc(screen-80px)] flex justify-center items-center bg-[url(/authentication.png)] shadow-2xl'>
                    <div className="card-body flex items-center">
                        <h2 className='text-2xl font-bold text-center mt-6'>Please Login</h2>
                        <form onSubmit={handleLogin} className="fieldset w-sm">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input w-full" placeholder="Email" name="email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input w-full" placeholder="Password" name="password" />
                            <Link className='text-gray-600'>Forget password??</Link>

                            <div className='p-4 flex justify-between items-center'>
                                <LoadCanvasTemplate />
                                <img className={`${disabled ? 'hidden' : ''} w-6 h-6`} src={correct} alt="" />
                            </div>
                            <input onChange={handleChange} type="text" className="input w-full" placeholder="Type the text above" name="capcha" />
                            <button disabled={disabled} className="btn bg-[#D1A054B3] mt-4">Login</button>
                            <p className='text-[#D1A054B3] text-center font-semibold text-[16px] py-2'>Dont have an account? <a className='underline' href="/registration">Go to sign up</a></p>
                            <div className="divider">OR</div>
                        </form>
                    </div>
                    <div className='w-1/2'>
                        <img src={LoginImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;