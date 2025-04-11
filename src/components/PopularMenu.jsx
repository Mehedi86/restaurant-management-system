import React, { useEffect, useState } from 'react';
import ReusableHeader from './ReusableHeader';
import MenuItem from './MenuItem';

const PopularMenu = () => {
    const [menuItem, setMenuItem] = useState([]);

    useEffect(() => {
        fetch("/menu.json")
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular');
                setMenuItem(popularItem)
            })
    }, [])
    return (
        <div className='my-20'>
            <ReusableHeader header={'FROM OUR MENU'} subHeader={'---Check it out---'} />
            <div className='grid grid-cols-2 gap-4'>
                {menuItem.map(item => <MenuItem key={item._id} item={item} />)}
            </div>
        </div>
    );
};

export default PopularMenu;