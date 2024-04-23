// components/Footer.js

import React from 'react';
import {FacebookIcon, InstagramrIcon, LinkedInIcon, TelegramIcon, TwitterIcon} from "./Icons";

function Footer() {
    return (
        <footer className="pt-10">
            <div className='flex flex-col items-center text-center py-6 mx-auto max-w-screen-xl'>
                <div className="flex space-x-4 px-20">
                    <h2 className="font-semibold">Copyright © Aurora Propulsion Technologies</h2>
                    <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                        <TelegramIcon />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                    <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <InstagramrIcon />
                    </a>
                </div>
                <br/>
                <p>Aurora is a tech company founded in 1999, and is headed up by CEO and co-founder. All rights reserved.Address: 34 Wolf Pond Rd, Wurtsboro, New York 12790, USA.</p>
            </div>
        </footer>
    );
}

export default Footer;
