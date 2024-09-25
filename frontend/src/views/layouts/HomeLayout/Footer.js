import React from 'react';
import SocialMediaIcons from '../GuestLayout/SocialMediaIcons';

const Footer = () => {
    return (
    <footer className="mt-4 py-4 text-dark rounded" style={{'backgroundColor' : 'lightcyan'}}>
        <div className="col">
            <SocialMediaIcons />
        </div>
    </footer>
    );
};

export default Footer;