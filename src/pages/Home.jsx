import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import About from '../components/About';
import PopularMenu from '../components/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <About/>
            <PopularMenu/>
        </div>
    );
};

export default Home;