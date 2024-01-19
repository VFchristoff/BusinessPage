import React from 'react';

const Clients = ({ clientImageUrls, clientdescription, clientName,clientCompany }) => {
    return (
        <div className="flex flex-wrap justify-center px-6 sm:px-16 md:px-10 lg:px-20 xl:px-40 2xl:px-60">
            {clientName.map((_, index) => (
                <div key={index} className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mb-4 ${index !== clientName.length - 1 ? 'md:mx-6' : ''}`}>
                </div>
            ))}
        </div>
    );
};

export default Clients;
