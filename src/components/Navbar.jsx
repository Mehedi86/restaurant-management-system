import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navItem = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/foodRequest/pizza">Order Food</NavLink>
    </>;
    return (
        <div className="container navbar fixed z-10 bg-black/30 text-white shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                        {navItem}
                    </ul>
                </div>
                <div className='text-center'>
                    <a className='font-bold text-xl'>Food Vibes</a>
                    <p className='tracking-[6px]'>RESTAURANT</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='mr-6 flex gap-4'>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/registration">Registration</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;