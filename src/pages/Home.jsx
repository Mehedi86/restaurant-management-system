import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import About from '../components/About';
import PopularMenu from '../components/PopularMenu';
import CallUs from '../components/CallUs';
import ChefRecommandation from '../components/ChefRecommandation';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <About/>
            <PopularMenu/>
            <CallUs/>
            <ChefRecommandation/>
        </div>
    );
};

export default Home;