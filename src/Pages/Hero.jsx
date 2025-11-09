import React from 'react';
import Marquee from 'react-fast-marquee';
import pet1 from '../../Pictures/pet-2.jpg';
import pet2 from '../../Pictures/pet-1.jpg';
import pet3 from '../../Pictures/pet-3.jpg';
import { Link } from 'react-router';
const Hero = () => {
    return (
        <div className='mt-20 md:mt-10 w-11/12 mx-auto '>
            <Marquee>
                <div className="hero bg-orange-50 min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src= {pet1}
      className="max-w-sm rounded-lg shadow-2xl md:h-100  hover:scale-105 transition ease-in-out duration-1000"
    />
    <div>
      <h1 className="text-5xl font-bold mb-5 animate__animated animate__fadeInDown animate__delay-1s">Cozy Paws, Warm Hearts</h1>
      
      <Link to={"/services"}>
      <button className="btn bg-orange-400 hover:bg-gradient-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl animate-bounce animate__animated animate__fadeInDown animate__delay-1s">Explore Services</button></Link>
    </div>
  </div>
</div>
                <div className="hero bg-orange-50 min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src= {pet2}
      className="max-w-sm rounded-lg shadow-2xl md:h-100  hover:scale-105 transition ease-in-out duration-1000"
    />
    <div>
      <h1 className="text-5xl font-bold mb-5 animate animate__animated animate__fadeInDown animate__delay-1s">Winter Style, Pet Smiles</h1>
      
      <Link to={"/services"}>
      <button className="btn bg-orange-400 hover:bg-gradient-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl animate-bounce animate__animated animate__fadeInDown animate__delay-1s">Explore Services</button></Link>
    </div>
  </div>
</div>
                <div className="hero bg-orange-50 min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={pet3}
      className="max-w-sm rounded-lg shadow-2xl md:h-100  hover:scale-105 transition ease-in-out duration-1000"
    />
    <div>
      <h1 className="text-5xl font-bold mb-5 animate__animated animate__fadeInDown animate__delay-1s">Ready for the Snow Day</h1>
      
      <Link to={"/services"}>
      <button className="btn bg-orange-400 hover:bg-gradient-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl animate-bounce animate__animated animate__fadeInDown animate__delay-1s">Explore Services</button></Link>
    </div>
  </div>
</div>
            </Marquee>
        </div>
    );
};

export default Hero;