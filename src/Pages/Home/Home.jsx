import React from 'react';
import { Helmet } from 'react-helmet-async';
import BannerSlider from '../../Components/BannerSlider/BannerSlider';

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
        </div>
    );
};

export default Home;