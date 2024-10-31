// src/Home.js
import React from 'react';

// Importing components
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import BecomeAnAgent from './components/BecomeAnAgent/BecomeAnAgent';
import WhoIsKusmaFor from './components/WhoIsKusmaFor/WhoIsKusmaFor';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Footer from './components/Footer/Footer';

const Home = () => {
    return (
        <div className="App"> {/* Replace <Container fluid> with a simple <div> */}
           <Navbar />
           <LandingPage />
           <WhoIsKusmaFor />
           <BecomeAnAgent />
           <WhyChooseUs />
           <Footer />
        </div>
    );
};

export default Home;
