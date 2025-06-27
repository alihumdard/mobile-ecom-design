import React from 'react';

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-8 bg-white">
      <img
        src="/images/sale.png"
        alt="Sale"
        className="w-full relative px-72 object-contain"
      />
      <h2 className="absolute text-2xl md:text-3xl font-bold text-white mb-4 uppercase">
        Summer Season Sale
      </h2>
    </div>
  );
};

export default Main;
