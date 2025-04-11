import React from 'react';

const MenuBanner = ({img}) => {
    return (
        <div style={{backgroundImage: `url(${img})`}} className="w-full h-[600px] flex justify-center items-center">
            <div className='bg-black/40 w-4/6 text-center space-y-4 px-10 py-16 text-white'>
                <h2 className='text-6xl uppercase'>OUR MENU</h2>
                <p className='text-lg'>Would you like to try a dish?</p>
            </div>
        </div>
    );
};

export default MenuBanner;
