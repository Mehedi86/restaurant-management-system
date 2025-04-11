import React from 'react';
import useDynamicTitle from '../hooks/useDynamicTitle';
import MenuImg from '/banner3.jpg'
import pizzaImg from '/pizza-bg.jpg'
import soupImg from '/soup-bg.jpg'
import saladImg from '/salad-bg.jpg'
import dessertImg from '/dessert-bg.jpeg'
import MenuCategory from '../components/MenuCategory';
import useMenu from '../hooks/useMenu';

const Menu = () => {
    useDynamicTitle('Menu')
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    console.log(offered, pizza, soup, dessert, salad)
    return (
        <div>
            {/* offered item */}
            <MenuCategory items={offered} img={MenuImg} header={'TODAYS OFFER'} subHeader={'---Dont miss---'} title={'OUR MENU'} subtitle={'Would you like to try a dish?'} />

            {/* Dessert */}
            <MenuCategory items={dessert} img={dessertImg} title={'DESSERTS'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.'} />

            {/* Pizza */}
            <MenuCategory items={pizza} img={pizzaImg} title={'PIZZA'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.'} />

            {/* Soup */}
            <MenuCategory items={soup} img={soupImg} title={'SOUP'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.'} />
            {/* Salad */}
            <MenuCategory items={soup} img={saladImg} title={'SALAD'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.'} />
        </div>
    );
};

export default Menu;