import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import About from '../components/About';
// import PopularMenu from '../components/PopularMenu';
import CallUs from '../components/CallUs';
import ChefRecommandation from '../components/ChefRecommandation';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';
import useDynamicTitle from '../hooks/useDynamicTitle';
import MenuCategory from '../components/MenuCategory';
import useMenu from '../hooks/useMenu';

const Home = () => {
    useDynamicTitle('Home');
    const [menu] = useMenu();
    const popularItem = menu.filter(item => item.category === 'popular');
    return (
        <div>
            <Banner/>
            <Categories/>
            <About/>
            {/* <PopularMenu/> */}
            <MenuCategory items={popularItem} header={'FROM OUR MENU'} subHeader={'---Check it out---'}/>
            <CallUs/>
            <ChefRecommandation/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;