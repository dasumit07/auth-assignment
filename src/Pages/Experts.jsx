import React from 'react';

const Experts = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-10  bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text'>Meet Our Expert Vets</h1>
            <div className='md:flex justify-center mt-5 gap-6 w-11/12 mx-auto '>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-1000 w-80  hover:scale-105 transition ease-in-out mb-8">
      <img src="https://i.ibb.co.com/WW65NmZK/shutterstock-1856402929-e1634155124827.jpg" alt="Dr. Olivia Brown" className="w-full h-56 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">Dr. Olivia Brown</h3>
        <p className="text-sm bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text">Veterinary Surgeon</p>
        <p className="text-xs text-gray-500 mt-1">10+ Years Experience</p>
        <p className="text-gray-600 text-sm mt-2">Expert in small animal surgery and post-operative care. Dedicated to providing gentle and effective treatment for all pets.</p>
      </div>
    </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-1000 w-80  hover:scale-105 transition ease-in-out mb-8">
      <img src="https://i.ibb.co.com/Xr4DggKq/administering-a-breathing-treatment-for-my-dog-ezy.webp" alt="Dr. Ethan Walker" className="w-full h-56 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">Dr. Ethan Walker</h3>
        <p className="text-sm bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text">Pet Nutrition Specialist</p>
        <p className="text-xs text-gray-500 mt-1">8+ Years Experience</p>
        <p className="text-gray-600 text-sm mt-2">Passionate about creating personalized diet plans for pets to ensure they live long, healthy, and happy lives.</p>
      </div>
    </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-1000 w-80  hover:scale-105 transition ease-in-out mb-8">
      <img src="https://i.ibb.co.com/cKKzrXLC/images-3.jpg" alt="Dr. Sophia Green" className="w-full h-56 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">Dr. Smith Green</h3>
        <p className="text-sm bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text">Veterinary Dermatologist</p>
        <p className="text-xs text-gray-500 mt-1">6+ Years Experience</p>
        <p className="text-gray-600 text-sm mt-2">Specialist in skin and coat health. Known for her caring approach and advanced treatments for allergies and infections.</p>
      </div>
    </div>
            </div>
        </div>
    );
};

export default Experts;