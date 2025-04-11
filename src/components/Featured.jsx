import React from 'react';
import ReusableHeader from './ReusableHeader';
import featuredImg from '../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className='bg-[url(/featured.jpg)] bg-fixed bg-black/40 bg-blend-darken pt-1 mb-20 px-30'>
            <ReusableHeader header={'FROM OUR MENU'} subHeader={'---Check it out---'} textColor={'text-white'}/>
            <div className='flex gap-12 pb-20'>
                <img className='w-1/2' src={featuredImg} alt="" />
                <div className='text-white space-y-4'>
                    <h3 className='text-2xl'>March 20, 2023</h3>
                    <h2 className='text-4xl'>WHERE CAN I GET SOME?</h2>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="cursor-pointer text-white rounded-xl px-4 py-2 border-b-2 border-white hover:scale-95 hover:bg-[#1F2937]">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;