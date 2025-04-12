import React, { useState } from 'react';
import useDynamicTitle from '../hooks/useDynamicTitle';
import useMenu from '../hooks/useMenu';
import Cover from '../components/Cover';
import orderImg from '/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../components/FoodCard';
import { useParams } from 'react-router-dom';

const FoodRequest = () => {
    useDynamicTitle('Order Food')
    const categories = ["pizza", "salad", "drinks", "dessert", "soup", "our menu"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    console.log(initialIndex, category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === 'drinks');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    console.log(offered)


    return (
        <div className='mb-20'>
            <Cover img={orderImg} title={'OUR SHOP'} subtitle={'Would you like to try a dish?'} />

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList classID='text-2xl font-bold'>
                    <Tab>Pizza</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Offered</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-4 gap-4'>
                        {pizza.map(item => <FoodCard key={item._id} item={item} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-4 gap-4'>
                        {salad.map(item => <FoodCard key={item._id} item={item} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-4 gap-4'>
                        {drinks.map(item => <FoodCard key={item._id} item={item} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-4 gap-4'>
                        {dessert.map(item => <FoodCard key={item._id} item={item} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-4 gap-4'>
                        {soup.map(item => <FoodCard key={item._id} item={item} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-4 gap-4'>
                        {offered.map(item => <FoodCard key={item._id} item={item} />)}
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default FoodRequest;