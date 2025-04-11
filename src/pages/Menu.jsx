import React from 'react';
import useDynamicTitle from '../hooks/useDynamicTitle';
import MenuImg from '/banner3.jpg'
import MenuBanner from '../components/MenuBanner';

const Menu = () => {
    useDynamicTitle('Menu')
    return (
        <div>
            <MenuBanner img={MenuImg} />
        </div>
    );
};

export default Menu;