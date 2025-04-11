import React from 'react';

const Cover = ({img, title, subtitle}) => {
    return (
        <div style={{backgroundImage: `url(${img})`}} className="w-full h-[600px] flex justify-center items-center mb-20">
            <div className='bg-black/40 w-4/6 text-center space-y-4 px-10 py-16 text-white'>
                <h2 className='text-6xl uppercase'>{title}</h2>
                <p className='text-lg'>{subtitle}</p>
            </div>
        </div>
    );
};

export default Cover;