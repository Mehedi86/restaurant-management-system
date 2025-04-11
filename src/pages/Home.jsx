import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import About from '../components/About';
import PopularMenu from '../components/PopularMenu';
import CallUs from '../components/CallUs';
import ChefRecommandation from '../components/ChefRecommandation';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <About/>
            <PopularMenu/>
            <CallUs/>
            <ChefRecommandation/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;