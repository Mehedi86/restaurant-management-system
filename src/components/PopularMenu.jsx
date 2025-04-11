import React, { useEffect, useState } from 'react';
import ReusableHeader from './ReusableHeader';
import MenuItem from './MenuItem';
import useMenu from '../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItem = menu.filter(item => item.category === 'popular');
    
    return (
        <div className='my-20'>
            <ReusableHeader header={'FROM OUR MENU'} subHeader={'---Check it out---'} />
            <div className='grid grid-cols-2 gap-4'>
                {popularItem.map(item => <MenuItem key={item._id} item={item} />)}
            </div>
        </div>
    );
};

export default PopularMenu;