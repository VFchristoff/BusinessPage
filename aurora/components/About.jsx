// About.js

import React from 'react';

const About = ({id,title, description }) => {
    return (
        <div id={id} className="flex flex-col items-center justify-center px-12 py-12 sm:px-16 md:px-20 lg:px-40 xl:px-60 2xl:px-80">
            <h2 className="font-heebo-sans text-3xl font-bold text-stone-700 py-12">{title}</h2>
            <p className="font-heebo-sans text-stone-700 text-center">{description}</p>
        </div>
    );
};

export default About;
