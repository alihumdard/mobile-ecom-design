import React from "react";

const Brand = () => {
  const brands = [
    "Samsung",
    "OPPO",
    "Vivo",
    "Redmi",
    "Itel",
    "Infinix",
    "Tehno",
    "Samsung",
    "Samsung",
    "Samsung",
    "Samsung",
    "Samsung",
  ];
  return (
    <div>
      {/* Heading */}
      <h1 className="text-xl font-semibold pt-20 pb-10 px-4 sm:px-10 md:px-20 lg:px-40 text-center sm:text-left">
        Online Official Retailer
      </h1>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-[#deeaf3] pt-14 px-4 sm:px-10 md:px-20 xl:px-52">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center text-center cursor-pointer"
          >
            <img
              src="/images/official-2.svg"
              alt={brand}
              className="w-24 h-24 object-contain relative"
            />
            <p className="text-sm font-semibold text-white mt-2 absolute">
              {brand}
            </p>
          </div>
        ))}
      </div>
      {/* Extra Brand */}
      <div className="flex flex-col items-center justify-center text-center bg-[#deeaf3] py-10 mb-10 cursor-pointer">
        <img
          src="/images/official-2.svg"
          alt="Samsung"
          className="w-24 h-24 object-contain relative"
        />
        <p className="text-sm font-semibold text-white absolute mt-2">
          Samsung
        </p>
      </div>
    </div>
  );
};

export default Brand;
