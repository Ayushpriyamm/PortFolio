import React from 'react';

const ServiceButtom = ({ btn, active, onClick }) => {
  return (
    <div>
      <div >
        <button
          className={`font-semibold justify-center bg-[#373737]   rounded-full flex items-center w-full  px-4 py-2 text-[14px] md:text-3xl ${
            active ? 'bg-transparent text-yellow-500 border-white border-2' : ''
          }`}
          onClick={() => onClick(btn)} // Call the onClick handler with the btn value
        >
          {btn}
        </button>
      </div>
    </div>
  );
};

export default ServiceButtom;
