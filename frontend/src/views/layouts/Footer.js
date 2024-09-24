import React from 'react';
import SocialMediaIcons from './GuestLayout/SocialMediaIcons';

const Footer = () => {
    return (
    <footer className="row py-4 mt-auto text-dark rounded" style={{'backgroundColor' : 'lightcyan'}}>
        <div className="col">
            <SocialMediaIcons />
         
        </div>
    </footer>
    );
};

export default Footer;