import React from 'react';

const Clients = ({ clientImageUrls, clientDescription, clientName, clientCompany }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 px-6 sm:px-16 md:px-10 lg:px-20 xl:px-40 2xl:px-60">
            {clientName.map((_, index) => (
                <div
                    key={index}
                    className={`w-full p-4 bg-slate-200 rounded-lg transition duration-500 ease-in-out transform hover:scale-105 ${
                        index % 2 === 0 ? 'sm:mr-2 md:mr-4 lg:mr-6 xl:mr-8 2xl:mr-10 mb-10' : 'sm:ml-2 md:ml-4 lg:ml-6 xl:ml-8 2xl:ml-10 mb-10'
                    }`}
                >
                    <div className="flex items-center">
                        <img src={clientImageUrls[index]} className="object-cover h-32 w-32 mb-4 mr-4 flex-shrink-0 transition duration-500 ease-in-out transform hover:scale-105 rounded-full"></img>
                        <div className="ml-4">
                            <p className="text-left text-md pb-3 text-gray-800">{clientDescription[index]}</p>
                        </div>
                    </div>
                    <p className="text-center font-semibold text-xl pb-3 text-gray-800">{clientName[index]}</p>
                    <p className="text-right text-md pb-3 text-gray-800">{clientCompany[index]}</p>
                </div>
            ))}
        </div>
    );
};

export default Clients;
