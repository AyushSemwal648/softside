import React, { useState,  } from "react";

const QuantityDropdown = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  return (
    <div className="relative rounded-lg border-[#A6A6A6] flex">
      <select
        value={selectedQuantity}
        onChange={handleChange}
        className="font-poppins opacity-50 text-sm lg:text-base  appearance-none bg-white border border-gray-300 hover:border-gray-400 px-2 py-1 pr-6 rounded shadow leading-tight focus:outline-none focus:shadow-outline "
      >
        <h1>Qty</h1>
        {[...Array(10).keys()].map((number) => (
          <option key={number + 1} value={number + 1}>
            {number + 1}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path opacity="0.5" d="M1 1L7 7L13 1" stroke="black" />
        </svg>
      </div>
    </div>
  );
};

export default QuantityDropdown;
