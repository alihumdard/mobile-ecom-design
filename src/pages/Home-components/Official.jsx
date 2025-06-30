import React from "react";
import { FaStar } from "react-icons/fa";

const Official = () => {
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
  ];

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
            <p className="text-sm font-semibold text-white mt-2 absolute">{brand}</p>
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
        <p className="text-sm font-semibold text-white absolute mt-2">Samsung</p>
      </div>

      {/* Top Deals Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold py-10 text-center sm:text-left">
          <span className="text-red-600">Top Deals</span> of Samsung
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productss.map((product, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-md shadow hover:shadow-lg transition-all relative cursor-pointer"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-3"
              />

              {/* Title */}
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                {product.title}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 text-sm text-yellow-500 mb-1">
                <FaStar /> {product.rating} ({product.reviews} Reviews)
              </div>

              {/* Price Info */}
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

export default Official;
