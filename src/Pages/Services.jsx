import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import Card from './Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const services = useLoaderData();

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: false,
      easing: 'ease-in-out',
    });
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, [services]);

  return (
    <div data-aos="fade-in">

      <h1
        className="text-center text-3xl font-bold mt-10 bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Our Services
      </h1>
      <div
        className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 w-11/12 mx-auto my-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {services.map((service) => (
          <div
            key={service.serviceId}
            
            className="transition-transform duration-300 hover:scale-105"
          >
            <Card service={service}></Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

