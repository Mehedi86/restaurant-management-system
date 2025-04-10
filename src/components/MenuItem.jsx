import React from 'react';

const MenuItem = ({item}) => {
    const {image, name, price, recipe} = item;
    return (
        <div className='flex gap-6'>
            <div>
                <img style={{borderRadius: '0px 200px 200px 200px'}} className='h-[100px]' src={image} alt="" />
            </div>
            <div>
                <h2 className='text-xl'>{name} ------------------</h2>
                <p className='text-gray-400'>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default MenuItem;