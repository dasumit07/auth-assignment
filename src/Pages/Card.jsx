import React from 'react';
import { Link } from 'react-router';

const Card = ({service}) => {
    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition hover:scale-105 transition ease-in-out duration-700 mb-8">
  <img
    src={service.image}
    alt={service.serviceName}
    className="h-48 w-full object-cover"
  />
  <div className="p-5">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      {service.serviceName}
    </h3>

    <div className="flex justify-between items-center text-gray-600 mb-3">
      <span className="text-sm flex items-center gap-1">
        ⭐ {service.rating}
      </span>
      <span className="text-lg font-bold text-orange-500">${service.price}</span>
    </div>

    <Link to={`/service/${service.serviceId}`}>
    <button className="w-full bg-orange-400 hover:bg-gradient-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl py-2 cursor-pointer">
      View Details
    </button></Link>
  </div>
</div>

    );
};

export default Card;