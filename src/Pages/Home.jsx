import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Card from './Card';
import Hero from './Hero';
import Petcare from './Petcare';
import Experts from './Experts';
import Adoptpet from './Adoptpet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MoonLoader } from 'react-spinners';

const Home = () => {
  const data = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    if (data && data.length > 0) {
      setTimeout(() => setIsLoading(false), 500); 
    }

   
    AOS.init({
      duration: 800,
      offset: 100,
      once: false,
      easing: 'ease-in-out',
    });

 
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 800);

    return () => clearTimeout(timer);
  }, [data]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-orange-50">
        <MoonLoader color="#f97316" size={50} />
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
     
      <div data-aos="fade-up-right">
        <Hero />
      </div>

    
      <div data-aos="fade-up" data-aos-delay="200">
        <h1 className="text-center text-3xl font-bold mt-10 bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text">
          Our Popular Winter Care Services
        </h1>

        <div
          className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 w-11/12 mx-auto my-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {data.map((service) => (
            <div
              key={service.serviceId}
              data-aos="zoom-in"
              data-aos-delay="400"
              className="transition-transform duration-300 hover:scale-105"
            >
              <Card service={service} />
            </div>
          ))}
        </div>

        <div
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link to="/services">
            <button className="btn bg-orange-400 hover:bg-gradient-to-r from-orange-700 to-orange-500 text-white font-semibold transition ease-in-out rounded-2xl">
              See All Services
            </button>
          </Link>
        </div>
      </div>

      
      <div data-aos="fade-up" data-aos-delay="200">
        <Petcare />
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <Experts />
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <Adoptpet />
      </div>
    </div>
  );
};

export default Home;


