import React from "react";
import { FaStar } from "react-icons/fa";
import Features from "../Home-components/Features";

const Main = () => {
  const productss = [
    {
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=60",
      title: "Wireless Headphones Pro",
      rating: 4.8,
      reviews: 21,
      price: 8999,
      oldPrice: 10999,
      discount: "18% OFF",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=60",
      title: "Smart Watch Series 5",
      rating: 4.7,
      reviews: 18,
      price: 10499,
      oldPrice: 12999,
      discount: "19% OFF",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=60",
      title: "Bluetooth Speaker Mini",
      rating: 4.5,
      reviews: 10,
      price: 3499,
      oldPrice: 4999,
      discount: "30% OFF",
    },
    {
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=60",
      title: "Wireless Headphones Pro",
      rating: 4.8,
      reviews: 21,
      price: 8999,
      oldPrice: 10999,
      discount: "18% OFF",
    },
  ];

  return (
    <div className="bg-slate-100">
      {/* Section Title */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-10 text-lg font-semibold">
        <h1>Products That Go Together</h1>
      </div>

      {/* Products Grid */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 bg-white py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productss.map((product, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-md shadow hover:shadow-lg transition-all relative cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-3"
              />
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                {product.title}
              </h3>
              <div className="text-lg font-bold text-gray-900 mb-1">
                Rs {product.price.toLocaleString()}
              </div>
              <div className="flex items-center justify-between">
                <del className="text-sm text-gray-400">
                  Rs {product.oldPrice.toLocaleString()}
                </del>
                <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded">
                  {product.discount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="bg-slate-100 py-1"></div>

      {/* Features Section */}
      <Features />

      {/* Navigation Tabs */}
      <div className="w-full border-b bg-white py-6 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 border-gray-200">
        <nav className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 text-sm font-medium text-gray-600">
          {[
            "Similar Products",
            "Highlights",
            "Specifications",
            "What’s In The Box",
            "Installment Plans",
            "FAQs",
          ].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="pb-2 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-600 transition"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Specifications Section */}
      <div>
        <div className="py-6 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 text-lg font-semibold">
          <h1>Specifications</h1>
        </div>

        <div className="bg-white py-8 px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {/* Display */}
            <div>
              <img
                src="/images/detail9.svg"
                alt="Display"
                className="mx-auto mb-2 w-16 h-16"
              />
              <p className="text-sm font-medium text-gray-800">6.6 inches</p>
              <p className="text-xs text-gray-500">Display</p>
            </div>

            {/* RAM */}
            <div>
              <img
                src="/images/detail10.svg"
                alt="RAM"
                className="mx-auto mb-2 w-16 h-16"
              />
              <p className="text-sm font-medium text-gray-800">8GB RAM</p>
              <p className="text-xs text-gray-500">RAM</p>
            </div>

            {/* Battery */}
            <div>
              <img
                src="/images/detail11.svg"
                alt="Battery"
                className="mx-auto mb-2 w-16 h-16"
              />
              <p className="text-sm font-medium text-gray-800">5000 mAh</p>
              <p className="text-xs text-gray-500">Battery</p>
            </div>

            {/* Camera */}
            <div>
              <img
                src="/images/detail12.svg"
                alt="Back Camera"
                className="mx-auto mb-2 w-16 h-16"
              />
              <p className="text-sm font-medium text-gray-800">108 MP + 2 MP</p>
              <p className="text-xs text-gray-500">Back Camera</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
