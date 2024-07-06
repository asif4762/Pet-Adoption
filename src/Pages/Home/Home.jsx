import React from 'react';
import { Helmet } from 'react-helmet-async';
import BannerSlider from '../../Components/BannerSlider/BannerSlider';
import AboutUs from '../../Components/AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
        <Helmet>
            <title>
                Pet Adoption | Home
            </title>
        </Helmet>
            <h1>This is home</h1>
            {/* bannar-slider */}
            <BannerSlider/>
            {/* About us */}
            <AboutUs/>
        </div>
    );
};

export default Home;