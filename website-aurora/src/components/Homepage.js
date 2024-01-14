// components/Homepage.js

import React from 'react';

const Homepage = () => {
    return (
        <div className="relative h-96 bg-cover bg-center" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(12, 10, 36, 0.73), rgba(12, 10, 36, 0.73)), url(${require('../images/front-page/main/photo_5.webp')})`,
            minHeight: '800px',
        }}>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                    <h2 className="font-heebo-sans text-6xl drop-shadow-md">Leading in Tech</h2>
                    <br />
                    <br />
                    <h2 className="px-12 sm:px-16 md:px-20 lg:px-40 xl:px-60 2xl:px-80">
                        We are the future of the semiconductor industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod</h2>
                    <br />
                    <br />
                    <button className="font-heebo-sans text-sm lg:text-lg border border-white py-2 px-4 hover:bg-orange-500 transition duration-300 ease-in-out">
                        Contact us if you want to be part of something big
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
