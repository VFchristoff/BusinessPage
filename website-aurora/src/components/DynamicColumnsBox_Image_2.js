import React from 'react';

const DynamicColumnsBox_Image_2 = ({ title, imageUrls, description }) => {
    return (
        <div className="flex flex-wrap justify-center px-6 sm:px-16 md:px-10 lg:px-20 xl:px-40 2xl:px-60">
            {title.map((_, index) => (
                <div key={index} className={`relative w-full sm:w-1/2 p-4 mb-4 ${index % 2 === 0 ? 'sm:pr-2' : 'sm:pl-2'}`}>
                    <p className="text-center font-semibold text-2xl pb-3 text-gray-800">{title[index]}</p>
                    <div className="relative group">
                        <img
                            src={imageUrls[index]}
                            alt={`Image ${index + 1}`}
                            className="object-cover h-80 w-full rounded-md mb-4 transition duration-500 ease-in-out transform group-hover:brightness-50"
                        />
                        <p className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-gray-100">
                            <span className="text-lg p-4">{description[index]}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DynamicColumnsBox_Image_2;
