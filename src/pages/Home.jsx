import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import About from '../components/About';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <About/>
        </div>
    );
};

export default Home;