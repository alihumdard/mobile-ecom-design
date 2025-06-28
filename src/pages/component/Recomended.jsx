import React from "react";
import { FaStar } from "react-icons/fa";

const Recomended = () => {
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
  ];

  return (
    <div>
      <div>
        <div className="flex px-40 gap-5 text-sm pt-10">
          <p className="text-blue-500">You Might Also Like</p>
          <p>Mobiles</p>
          <p>Wireless Earbuds</p>
          <p>Smart Watches</p>
          <p>Power Banks</p>
        </div>

        <div className="bg-slate-50 py-10 px-4 md:px-10 lg:px-40 mt-10">
          <div className="mb-6">
            <h1 className="text-black text-xl font-bold">
              Recommended Products
            </h1>
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
      </div>

      <div className="flex flex-wrap justify-between px-40 gap-8 bg-white py-5 mb-10">
        {[
          {
            img: "/images/pta.svg",
            title: "PTA Approved",
            subtitle: "Mobile Phone",
          },
          {
            img: "/images/pta2.svg",
            title: "1 Year",
            subtitle: "Brand Warranty",
          },
          {
            img: "/images/pta3.svg",
            title: "Packaging Video",
            subtitle: "See Your Product",
          },
          {
            img: "/images/pta4.svg",
            title: "Fast Delivery",
            subtitle: "All Over Pakistan",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-20 h-20 mb-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h1>
            <p className="text-sm text-gray-500">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recomended;
