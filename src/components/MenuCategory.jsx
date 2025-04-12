import React from 'react';
import ReusableHeader from './ReusableHeader';
import MenuItem from './MenuItem';
import Cover from './Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, header, subHeader, img, title, subtitle }) => {

    return (
        <div className='mb-20'>
            {img && <Cover img={img} title={title} subtitle={subtitle} />}
            {header && < ReusableHeader header={header} subHeader={subHeader} />}
            <div className='grid grid-cols-2 gap-6'>
                {items.map(item => <MenuItem key={item._id} item={item} />)}
            </div>
            <div className='flex justify-center mt-12'>
                <Link to={`/foodRequest/${title}`} className="cursor-pointer text-[#BB8506] bg-gray-100 rounded-xl px-4 py-2 border-b-2 border-[#BB8506] hover:scale-95 hover:bg-[#1F2937]">ORDER YOUR FAVOURITE FOOD</Link>
            </div>
        </div>
    );
};

export default MenuCategory;