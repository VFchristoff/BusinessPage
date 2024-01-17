import React from 'react';

const DynamicColumnsBox = ({ title, description }) => {
    return (
        <div className="flex flex-wrap justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            {title.map((_, index) => (
                <div
                    key={index}
                    className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-blue-100 rounded-lg transition duration-500 ease-in-out transform hover:scale-105 mb-4 ${
                        index === 0 ? 'sm:ml-4 md:ml-8 lg:ml-12 xl:ml-16 2xl:ml-20' : index === title.length - 1 ? 'sm:mr-4 md:mr-8 lg:mr-12 xl:mr-16 2xl:mr-20' : 'sm:mx-2 md:mx-4 lg:mx-6 xl:mx-8 2xl:mx-10'
                    }`}
                >
                    <p className="text-center font-semibold text-2xl pb-3 text-gray-800">{title[index]}</p>
                    <p className="text-center text-gray-500">{description[index]}</p>
                </div>
            ))}
        </div>
    );
};

export default DynamicColumnsBox;
