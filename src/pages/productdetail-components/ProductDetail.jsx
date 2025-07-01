import React from "react";

const ProductDetail = () => {
  return (
    <div className="max-w-7xl mx-auto px-14 py-8 grid grid-cols-1 md:grid-cols-[1.5fr_2.5fr] gap-10 items-start">
      {/* Product Image & Thumbnails */}
      <div>
        <div className="relative border rounded-lg p-4 bg-white">
          <img
            src="/images/detail1.webp"
            alt="ZTE Nubia Focus 5G"
            className="rounded w-full h-auto"
          />
          <img
            src="/images/detail4.svg"
            alt="Official Retailer"
            className="absolute w-14 top-2 left-2"
          />
          <span className="absolute bottom-2 right-2 bg-gray-800 text-white px-2 py-0.5 text-sm rounded">
            1 / 3
          </span>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 mt-3 justify-center">
          <img
            src="/images/detail1.webp"
            className="w-14 h-14 border rounded"
          />
          <img
            src="/images/detail2.webp"
            className="w-14 h-14 border rounded"
          />
          <img
            src="/images/detail3.webp"
            className="w-14 h-14 border rounded"
          />
        </div>
      </div>

      {/* Product Details */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          ZTE Nubia Focus 5g
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <div className="flex text-yellow-400 text-sm">★★★★★</div>
          <span className="bg-yellow-100 text-yellow-800 text-sm px-2 py-0.5 rounded">
            5.0 | 1 Review
          </span>
          <img
            src="/images/detail5.svg"
            alt="Official"
            className="w-20 ml-40"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <p className="text-gray-700 text-sm">Priceoye Price</p>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-gray-800">Rs 33,699</span>
            <del className="text-gray-400 text-sm">Rs 44,999</del>
            <span className="bg-green-100 text-green-700 px-2 py-0.5 text-sm rounded">
              25% OFF
            </span>
          </div>
        </div>

        {/* Colors */}
        <div className="mb-4 flex gap-60">
          <div>
            <p className="text-gray-700 font-medium">Colors</p>
            <div className="border p-2 inline-block mt-1 rounded-md border-blue-500">
              <img
                src="/images/detail1.webp"
                alt="Color"
                className="w-12 h-auto"
              />
              <p className="text-sm text-center mt-1">Galactic Black</p>
            </div>
          </div>
          {/* Availability */}
          <div className="mb-4">
            <p className="text-gray-700 font-medium">Availability</p>
            <p className="text-green-600 font-semibold">In Stock</p>
            <p className="text-gray-500 text-sm">Only 4 left</p>
          </div>
        </div>

        {/* Storage Options */}
        <div className="mb-4">
          <p className="text-gray-700 font-medium">Storage</p>
          <div className="flex gap-2 mt-1 flex-wrap">
            <button className="px-3 py-1 border border-blue-500 rounded text-blue-600">
              256GB - 6GB RAM
            </button>
          </div>
        </div>

        {/* Gift Wrap */}
        <div className="border w-full md:w-[60%] border-orange-400 px-4 py-1 rounded-lg bg-orange-50 flex justify-between items-center gap-4 flex-wrap">
          {/* Left side: Checkbox + Text */}
          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              className="mt-1 accent-orange-500 w-5 h-5 cursor-pointer"
            />
            <div>
              <p className="font-semibold text-orange-800 text-base">
                Add Gift Wrap
              </p>
              <p className="text-sm text-gray-700">Cost: Rs 199</p>
              <p className="text-sm text-orange-600">
                Make it Memorable - Add Gift Wrapping!
              </p>
            </div>
          </div>

          {/* Right side: Image */}
          <img
            src="/images/detail6.webp"
            alt="Gift Wrap"
            className="w-16 h-16 object-contain"
          />
        </div>

        <div className="mt-3 border w-full md:w-[60%] border-[#0BB07E99] px-4 py-2 rounded-lg bg-[#a5e6d291] flex items-center justify-between gap-4">
          {/* Left side: Checkbox + Text */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              className="mt-1 accent-[#0BB07E] w-4 h-4 cursor-pointer"
            />
            <div>
              <span className="font-semibold text-orange-800 text-sm">
                2 Year Warranty
              </span>
              <p className="text-xs text-gray-700">Cost: Rs 1,099</p>
              <p className="text-xs text-[#0c886399] leading-snug">
                1 Year Brand (free) + 1 Year Priceoye Extended Warranty
              </p>
            </div>
          </div>

          {/* Right side: Image */}
          <img
            src="/images/detail7.svg"
            alt="Warranty"
            className="w-12 h-12 object-contain"
          />
        </div>

        <div className="mt-3 border w-full md:w-[60%] border-gray-400 bg-white rounded-lg px-4 py-2 flex items-center gap-4 shadow-sm">
          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center bg-[#0BB07E0F] rounded-full">
            <img
              src="/images/detail8.svg"
              alt="Installment Icon"
              className="w-6 h-6"
            />
          </div>

          {/* Text Content */}
          <div>
            <h1 className="text-gray-800 font-semibold text-lg">
              Installment Plans
            </h1>
            <p className="text-sm text-gray-600">Available in Pakistan</p>
          </div>
        </div>

        <div className="mt-3  w-full md:w-[60%] bg-white flex items-center gap-4">
          <button className="w-1/2 bg-[#f88b2a] text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
            Add to Cart
          </button>

          <button className="w-1/2 text-sm font-medium px-4 py-2 rounded bg-primary text-white transition duration-200">
            Compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
