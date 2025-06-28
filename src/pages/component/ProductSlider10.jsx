import React from "react";
import { FaStar } from "react-icons/fa";

const ProductSlider10 = () => {
  const products = [
    {
      title: "Infinix Zero flip",
      price: 104999,
      oldPrice: 234999,
      discount: "55% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/watch-1.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/watch-2.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/watch-3.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/watch-4.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/watch-5.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/watch-6.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/watch-7.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/watch-8.webp",
    },
  ];

  return (
    <div className="bg-slate-50 py-10 px-4 md:px-10 lg:px-40 mt-10">
      <div className="mb-6">
        <h1 className="text-black text-xl font-bold">Top Deals In Xiaomi</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-md shadow hover:shadow-lg transition-all relative"
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
            <div className="text-lg font-bold text-gray-900">
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
  );
};

export default ProductSlider10;