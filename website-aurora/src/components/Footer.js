// components/Footer.js

import React from 'react';

function Footer() {
    return (
        <footer className="bg-blue-100">
            <div className='flex text-center gap-x-5 justify-center py-6 mx-auto max-w-screen-xl'>
                <div>
                    <h2 className="font-semibold">Copyright © Aurora Propulsion Technologies</h2>
                    <br/>
                    <p>Aurora is a tech company founded in 1999, and is headed up by CEO and co-founder. All rights reserved.Address: 34 Wolf Pond Rd, Wurtsboro, New York 12790, USA.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
