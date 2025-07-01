import React from "react";
import { FaStar } from "react-icons/fa";
import URLS from "../../config/urls.config";
import { Link } from "react-router-dom";

const products = [
  {
    name: "ZTE Nubia Focus 5g",
    price: 33699,
    oldPrice: 44999,
    discount: 25,
    image: "/images/seller-1.webp",
  },
  {
    name: "ZTE Nubia Neo 2 5G",
    price: 42999,
    oldPrice: 54999,
    discount: 22,
    rating: 4.9,
    reviews: 21,
    image: "/images/seller-2.webp",
  },
  {
    name: "ZTE Nubia Focus Pro 5G",
    price: 45699,
    oldPrice: 57999,
    discount: 21,
    rating: 3.8,
    reviews: 4,
    image: "/images/seller-3.webp",
  },
  {
    name: "Amazfit Pop 3S",
    price: 10999,
    oldPrice: 25000,
    discount: 56,
    rating: 4.7,
    reviews: 3,
    image: "/images/seller-4.webp",
  },
  {
    name: "Sony WH-CH520 Wireless Headphones",
    price: 8999,
    oldPrice: 20000,
    discount: 55,
    rating: 5.0,
    reviews: 6,
    image: "/images/seller-5.webp",
  },
];

const formatPrice = (price) => `Rs ${price.toLocaleString()}`;

const BestSeller = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Best Seller</h2>
          <p className="text-gray-600">Get the best prices in town</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Big Product */}
          <Link to={URLS.ProductDetail} className="bg-white p-4 rounded shadow col-span-1 md:col-span-1 row-span-2">
            <h3 className="font-semibold mb-4">{products[0].name}</h3>
            <img src={products[0].image} alt={products[0].name} className="w-full h-[80%] object-contain mb-4" />
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold text-gray-800">{formatPrice(products[0].price)}</p>
                <p className="text-sm text-gray-500 line-through">{formatPrice(products[0].oldPrice)}</p>
              </div>
              <span className="text-green-600 text-sm font-medium">{products[0].discount}% OFF</span>
            </div>
          </Link>

          {/* Remaining Products */}
          {products.slice(1).map((product, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <img src={product.image} alt={product.name} className="w-full h-36 object-contain mb-3" />

              {product.rating && (
                <div className="flex items-center text-sm text-yellow-600 mb-2">
                  <FaStar className="mr-1" />
                  {product.rating} <span className="ml-1 text-gray-600">({product.reviews} Reviews)</span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold text-gray-800">{formatPrice(product.price)}</p>
                  <p className="text-sm text-gray-500 line-through">{formatPrice(product.oldPrice)}</p>
                </div>
                <span className="text-green-600 text-sm font-medium">{product.discount}% OFF</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
