// src/Home.js
import React from 'react';

// Importing components

import LandingPage from './components/LandingPage/LandingPage';
import BecomeAnAgent from './components/BecomeAnAgent/BecomeAnAgent';
import WhoIsKusmaFor from './components/WhoIsKusmaFor/WhoIsKusmaFor';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';


const Home = () => {
    return (
        <div className="App"> {/* Replace <Container fluid> with a simple <div> */}
          
           <LandingPage />
           <WhoIsKusmaFor />
           <BecomeAnAgent />
           <WhyChooseUs />
       
        </div>
    );
};

export default Home;
