import React from 'react';

const Clients = ({ clientImageUrls, clientDescription, clientName,clientCompany }) => {
    return (
        <div className="flex flex-wrap justify-center px-6 sm:px-16 md:px-10 lg:px-20 xl:px-40 2xl:px-60">
            {clientName.map((_, index) => (
                <div key={index} className={`w-full sm:w-2/3 md:w-2/4 lg:w-2/5 p-4 bg-blue-100 rounded-lg transition duration-500 ease-in-out transform hover:scale-105 mb-4 ${
                    index === 0 ? 'sm:ml-4 md:ml-8 lg:ml-12 xl:ml-16 2xl:ml-20' : index === clientName.length - 1 ? 'sm:mr-4 md:mr-8 lg:mr-12 xl:mr-16 2xl:mr-20' : 'sm:mx-2 md:mx-4 lg:mx-6 xl:mx-8 2xl:mx-10'
                }`}>

                    <div>
                        <img src={clientImageUrls[index]} className=""></img>
                        <p className="text-left text-md pb-3 text-gray-800">{clientDescription[index]}</p>
                    </div>
                    <p className="text-center font-semibold text-xl pb-3 text-gray-800">{clientName[index]}</p>
                    <p className="text-right text-md pb-3 text-gray-800">{clientCompany[index]}</p>
                </div>
            ))}
        </div>
    );
};

export default Clients;
