import React from 'react';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';

const Petcare = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-10  bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text'>Winter Care Tips for Pets</h1>
            <div className='md:flex justify-center items-center mt-5 gap-6 w-11/12 mx-auto '>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-1000 w-80 hover:scale-105 transition ease-in-out mb-8">
      <MdOutlineTipsAndUpdates className='text-3xl text-yellow-500' />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Keep Them Warm & Cozy</h3>
        <p className="text-gray-600 text-sm">Make sure your pets stay warm with cozy sweaters, blankets, and a soft bed during the chilly months.</p>
      </div>
    </div>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-1000 w-80 hover:scale-105 transition ease-in-out mb-8">
      <MdOutlineTipsAndUpdates className='text-3xl text-yellow-500' />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Protect Their Paws</h3>
        <p className="text-gray-600 text-sm">Use paw balm and clean their feet after walks to prevent dryness and frostbite caused by cold or salted roads.</p>
      </div>
    </div>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-1000 w-80 hover:scale-105 transition ease-in-out mb-8">
      <MdOutlineTipsAndUpdates className='text-3xl text-yellow-500' />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Keep Them Active Indoors</h3>
        <p className="text-gray-600 text-sm">Engage your pets in indoor games, training, or light exercise to keep them active, warm, and happy.</p>
      </div>
    </div>
            </div>
        </div>
    );
};

export default Petcare;