import React from "react";
import Brand from "../Home-components/Brand";

const Similler = () => {
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
  const products = [
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
   const producte = [
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
  const priceRanges = [
    "Below Rs. 15,000",
    "Rs. 15,000 - Rs. 25,000",
    "Rs. 25,000 - Rs. 40,000",
    "Rs. 40,000 - Rs. 60,000",
    "Rs. 60,000 - Rs. 80,000",
    "Rs. 80,000 - Rs. 100,000",
    "Rs. 100,000 - Rs. 150,000",
    "Above 150,000",
  ];
  return (
    <div>
      <div className="bg-slate-100 px-40 py-8 flex justify-between">
        <div>
          <h1 className="text-lg font-semibold pb-2">
            Similar Mobiles to ZTE Nubia Focus 5g
          </h1>
          <p>
            These are some mobiles you can buy similar to ZTE Nubia Focus 5g. I
            think you’ll like them, too.
          </p>
        </div>
        <div>
          <button className="px-6 py-3 bg-primary text-white rounded-md text-sm">
            compare
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-8 bg-white md:px-16 lg:px-20 xl:px-40 py-6">
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

      {/* category */}
      <div className="bg-slate-100">
        <h1 className="text-xl font-semibold py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
          Shop More Categories
        </h1>
        <div className="bg-[#f9dcff] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 flex flex-wrap gap-5 justify-center pt-10">
          {[
            { label: "Mobiles", image: "/images/mob-1.webp" },
            { label: "EarBuds", image: "/images/air-3.webp" },
            { label: "Watches", image: "/images/watch-1.webp" },
            { label: "Mobiles", image: "/images/mob-1.webp" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col border-2 border-purple-900 items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-32 cursor-pointer"
            >
              <img
                src={item.image}
                className="w-20 h-20 object-contain mb-2"
                alt={item.label}
              />
              <div className="bg-[#8804a6] w-full py-4 rounded-br-2xl rounded-bl-2xl text-center">
                <p className="text-sm font-medium text-white">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <Brand />

        <div>
          <div className="bg-slate-100 px-40 py-10 text-lg font-semibold">
            <h1>Popular Among Customers</h1>
          </div>
          <div className="px-4 sm:px-8 bg-white md:px-16 lg:px-20 xl:px-40 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, i) => (
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
        </div>

        {/* top BestSeller */}
        <div>
          <div className="bg-slate-100 px-40 py-10 text-lg font-semibold">
            <h1>Priceoye’s Top Seller</h1>
          </div>
          <div className="px-4 sm:px-8 bg-white md:px-16 lg:px-20 xl:px-40 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {producte.map((product, i) => (
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
        </div>

          {/* Shop by Price */}
        <div className="">
          <h1 className="text-lg py-10 px-40">Shop by Price</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 py-10 bg-[#fdc9da] px-40">
            {priceRanges.map((range, index) => (
              <p
                key={index}
                className="relative py-3 px-4 text-center rounded-xl cursor-pointer overflow-hidden hover:text-pink-600 bg-pink-600 text-white transition-all duration-700 ease-in-out group"
              >
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0"></span>
                <span className="relative z-10">{range}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Similler;
