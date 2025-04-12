import React from 'react';
import useDynamicTitle from '../hooks/useDynamicTitle';
import useMenu from '../hooks/useMenu';

const FoodRequest = () => {
    useDynamicTitle('Order Food')
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    console.log(offered, pizza, soup, dessert, salad)
    return (
        <div>
            
        </div>
    );
};

export default FoodRequest;