import React from 'react';
import ReusableHeader from './ReusableHeader';
import MenuItem from './MenuItem';
import Cover from './Cover';

const MenuCategory = ({items, header, subHeader, img, title, subtitle}) => {

    return (
        <div className='mb-20'>
            {img && <Cover img={img} title={title} subtitle={subtitle}/>}
            {header && < ReusableHeader header={header} subHeader={subHeader} />}
            <div className='grid grid-cols-2 gap-4'>
                {items.map(item => <MenuItem key={item._id} item={item} />)}
            </div>
        </div>
    );
};

export default MenuCategory;