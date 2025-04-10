import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className="md:grid grid-cols-2 bg-neutral text-neutral-content">
                <div className='text-xl flex justify-end p-16 bg-neutral-600'>
                    <div className='text-center space-y-0.5'>
                        <h2 className='text-4xl pb-2'>Contact Us</h2>
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <div className='text-4xl flex justify-start p-16 bg-neutral-900'>
                    <div className='text-center space-y-2'>
                        <h2 className='pb-2'>Follow Us</h2>
                        <p className='text-xl'>Join us on social media</p>
                        <div className='flex justify-center my-4'>
                            <p className='flex gap-2'><FaFacebookF /><FaInstagram /><FaXTwitter /></p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;