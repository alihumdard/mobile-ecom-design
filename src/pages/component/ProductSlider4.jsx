import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProductSlider4 = () => {
  const products = [
    {
      title: "Infinix Zero flip",
      price: 104999,
      oldPrice: 234999,
      discount: "55% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/air-1.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/air-2.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/air-3.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/air-4.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/air-5.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/air-6.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/air-7.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/air-8.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/air-9.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/air-10.webp",
    },
  ];
  // products.js

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
        "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=500&q=60",
      title: "Portable Camera Lens",
      rating: 4.6,
      reviews: 13,
      price: 6499,
      oldPrice: 7999,
      discount: "19% OFF",
    },
  ];

  // Split products into chunks of 2 for 2 rows
  const chunkedProducts = [];
  for (let i = 0; i < products.length; i += 2) {
    chunkedProducts.push(products.slice(i, i + 2));
  }

  return (
    <div className="">
      <div className="relative py-10 px-40 bg-[url('/images/bg-1.png')] bg-cover bg-center">
        <div className="mb-6 flex justify-between">
          <h1 className="text-white text-xl font-bold">
            Latest Bluetooth Speakers
          </h1>
          <button className="bg-white text-gray-600 text-sm font-semibold px-6 py-2 rounded hover:bg-gray-100 hover:text-black transition">
            View All
          </button>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <div className="swiper-button-prev-custom absolute top-[47%] left-2 z-10 w-9 h-9 flex items-center justify-center bg-gray-800 text-white rounded-lg cursor-pointer hover:bg-primary">
            <FiChevronLeft />
          </div>
          <div className="swiper-button-next-custom absolute top-[47%] right-2 z-10 w-9 h-9 flex items-center justify-center bg-gray-800 text-white rounded-lg cursor-pointer hover:bg-primary">
            <FiChevronRight />
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            slidesPerView={4}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
          >
            {chunkedProducts.map((group, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-rows-2 gap-4 cursor-pointer">
                  {group.map((product, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-md shadow hover:shadow-lg transition-all relative"
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-40 object-contain mb-3"
                      />
                      <img
                        src="/images/season-logo.png"
                        alt="sale badge"
                        className="absolute top-2 right-2 w-12 h-12"
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold py-10"><span className="text-red-600">Craziest Deals</span> of the Year</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pr-56">
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

export default ProductSlider4;
