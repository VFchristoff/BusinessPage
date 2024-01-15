import React from 'react';

const DynamicColumnsBox = ({ title, description }) => {
    return (
        <div className="flex flex-wrap justify-center px-6 sm:px-16 md:px-10 lg:px-20 xl:px-40 2xl:px-60">
            {title.map((_, index) => (
                <div key={index} className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-blue-100 rounded-lg transition duration-500 ease-in-out transform hover:scale-105 mb-4 ${index !== title.length - 1 ? 'md:mx-6' : ''}`}>
                    <p className="text-center font-semibold text-2xl pb-3 text-gray-800">{title[index]}</p>
                    <p className="text-center text-gray-500">{description[index]}</p>
                </div>
            ))}
        </div>
    );
};

export default DynamicColumnsBox;
