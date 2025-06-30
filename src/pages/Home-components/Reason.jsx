import React from "react";
import { FaStar } from "react-icons/fa";

const ReasonsToBuy = () => {
  const reasons = [
    {
      id: 1,
      title: "Priceoye",
      subtitle: "Extended Warranty",
      image: "/images/reason1.svg",
      linkText: "Know More",
    },
    {
      id: 2,
      title: "Packaging",
      subtitle: "Video",
      image: "/images/reason2.svg",
      linkText: "Know More",
    },
    {
      id: 3,
      title: "Open Parcel",
      subtitle: "(ISB - LHR - KHI)",
      image: "/images/reason3.svg",
      linkText: "Know More",
    },
    {
      id: 4,
      title: "Easy Installments",
      subtitle: "Installments",
      image: "/images/reason4.svg",
      linkText: "Know More",
    },
  ];

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
    <div>
      {/* Reasons to Buy Section */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40 py-12 bg-gray-50">
        <h2 className="text-xl font-bold mb-10 text-gray-800">Reasons to Buy</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="flex items-center justify-center text-center gap-20 py-10 rounded-xl shadow-md p-6 md:pl-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background:
                  "radial-gradient(25.65% 62.25% at 27.62% 50.2%, #48afff 21.57%, #0078d5 100%)",
              }}
            >
              {/* Icon */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center bg-white/20 rounded-full p-3 backdrop-blur-sm shrink-0">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex-grow text-left">
                <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                {reason.subtitle && (
                  <p className="text-white opacity-90 mb-4">{reason.subtitle}</p>
                )}
                <a
                  href="#"
                  className="inline-block bg-white/90 mt-2 text-indigo-600 font-medium hover:text-indigo-800 px-4 py-2 rounded-full hover:bg-white transition-all"
                >
                  {reason.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40 py-10">
        <h1 className="text-2xl font-semibold py-10">
          <span className="text-red-600 pr-2">New</span>Arrivals
        </h1>
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
              <div className="flex items-center gap-1 text-sm text-yellow-500 mb-1">
                <FaStar /> {product.rating} ({product.reviews} Reviews)
              </div>
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
    </div>
  );
};

export default ReasonsToBuy;
