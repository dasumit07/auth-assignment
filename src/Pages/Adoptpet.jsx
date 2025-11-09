import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Adoptpet = () => {
  const handleAdopt = (petName) => {
    toast.success(`Thank you for choosing to adopt ${petName}! Our team will contact you soon.`);
  }
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-10  bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text'>Adopt a Friend</h1>
            <div className='md:flex justify-center mt-5 gap-6 w-11/12 mx-auto mb-8'>
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-1000 w-80 mb-8">
      <img src="https://i.ibb.co.com/V1rCLm9/golden-retriever-dog-breed-info.jpg" alt="Milo" className="w-full h-56 object-cover" />
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">Name: Milo</h2>
        <p className="text-sm bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text">Breed: Golden Retriever</p>
        <p className="text-xs text-gray-500 mb-2">Age: 2 Years</p>
        <p className="text-gray-600 text-sm mb-4">A playful and friendly dog who loves people and long walks. Perfect companion for any family.</p>
        <button onClick={()=> handleAdopt("Milo")} className="w-full bg-orange-400 hover:bg-gradient-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl py-2 cursor-pointer">
          Adopt Me 💖
        </button>
      </div>
    </div>
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-1000 w-80 mb-8">
      <img src="https://i.ibb.co.com/s9Q1DfNk/Persian-Cat-Facts-History-Personality-and-Care-ASPCA-Pet-Health-Insurance-white-Persian-cat-resting.jpg" alt="Luna" className="w-full h-56 object-cover" />
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">Name: Luna</h2>
        <p className="text-sm bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text">Breed: Persian Cat</p>
        <p className="text-xs text-gray-500 mb-2">Age: 1.5 Years</p>
        <p className="text-gray-600 text-sm mb-4">Gentle and affectionate cat who loves warm blankets and cuddles. Great for apartment living.</p>
        <button onClick={()=> handleAdopt("Luna")} className="w-full bg-orange-400 hover:bg-gradient-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl py-2 cursor-pointer">
          Adopt Me 💖
        </button>
      </div>
    </div>
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-1000 w-80 mb-8">
      <img src="https://i.ibb.co.com/gLYmkP25/images-4.jpg" alt="Rocky" className="w-full h-56 object-cover" />
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">Name: Rocky</h2>
        <p className="text-sm bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text">Breed: Siberian Husky</p>
        <p className="text-xs text-gray-500 mb-2">Age: 3 Years</p>
        <p className="text-gray-600 text-sm mb-4">Energetic and loyal Husky who enjoys outdoor adventures and playing with friend in the snow.</p>
        <button onClick={()=> handleAdopt("Rocky")} className="w-full bg-orange-400 hover:bg-gradient-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl py-2  cursor-pointer">
          Adopt Me 💖
        </button>
      </div>
    </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default Adoptpet;