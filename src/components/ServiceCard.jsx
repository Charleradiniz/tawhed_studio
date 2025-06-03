// src/components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="h-[300px] w-full bg-[url('/servicecard_bg.jpg')] bg-cover bg-center rounded-lg p-4 shadow-md">
      <h3 className="mb-2 py-1 font-black text-lg">
        {service.name}
      </h3>
      <p className="text-sm text-gray-700 mb-2">{service.description}</p>
      <p className="text-base font-semibold text-green-700">{service.price}</p>
    </div>
  );
};

export default ServiceCard;
