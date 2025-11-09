import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLoaderData, useParams } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceDetails = () => {
  const params = useParams();
  const { id } = params;
  const data = useLoaderData();
  const filteredData = data.find((p) => p.serviceId === parseInt(id));

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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    if (!name || !email) {
      toast.error('Please provide valid name and email.');
      return;
    }
    toast.success('🎉 Booking Successful!');
    e.target.reset();
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16" data-aos="fade-in">
      <Toaster position="top-center" />

      <div
        className="flex flex-col md:flex-row gap-10 items-start"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <img
          src={filteredData.image}
          alt={filteredData.serviceName}
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
          data-aos="zoom-in"
          data-aos-delay="200"
        />

        <div className="flex-1" data-aos="fade-up" data-aos-delay="300">
          <form
            onSubmit={handleSubmit}
            className="mb-5 bg-orange-50 p-6 rounded-xl shadow"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text">
              Book This Service
            </h3>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="btn w-full bg-orange-400 hover:bg-gradient-to-r from-orange-700 to-orange-500 text-white font-semibold transition ease-in-out rounded-2xl py-2"
            >
              Book Now
            </button>
          </form>
          <h1
            className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text mb-3"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            {filteredData.serviceName}
          </h1>

          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Category:</span> {filteredData.category}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Provider:</span> {filteredData.providerName}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Email:</span> {filteredData.providerEmail}
          </p>

          <p className="text-gray-700 mb-5 leading-relaxed">{filteredData.description}</p>

          <div
            className="flex items-center justify-between mb-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="text-lg font-semibold bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text">
              💰 Price: ${filteredData.price}
            </p>
            <p className="text-lg font-semibold text-yellow-500">
              ⭐ {filteredData.rating}
            </p>
            <p className="text-gray-700">
              ⏳ Slots Available: {filteredData.slotsAvailable}
            </p>
          </div>

          
        </div>
      </div>

      <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
        <Link to="/services">
          <button className="btn bg-orange-400 hover:bg-gradient-to-r from-orange-700 to-orange-500 text-white font-semibold transition ease-in-out rounded-2xl py-2">
            ← Back to Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
