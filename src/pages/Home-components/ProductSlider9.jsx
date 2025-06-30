import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProductSlider9 = () => {
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
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/watch-9.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/watch-10.webp",
    },
  ];

  const chunkedProducts = [];
  for (let i = 0; i < products.length; i += 2) {
    chunkedProducts.push(products.slice(i, i + 2));
  }

  return (
    <div className="">
      <div className="relative py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 bg-[url('/images/bg-1.png')] bg-cover bg-center mt-10">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-white text-xl font-bold">Latest Power Banks</h1>
          <button className="bg-white text-gray-600 text-sm font-semibold px-6 py-2 rounded hover:bg-gray-100 hover:text-black transition">
            View All
          </button>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <div className="swiper-button-prev-custom absolute top-[47%] left-2 z-10 w-9 h-9 flex items-center justify-center bg-gray-800 text-white rounded-md cursor-pointer hover:bg-primary">
            <FiChevronLeft />
          </div>
          <div className="swiper-button-next-custom absolute top-[47%] right-2 z-10 w-9 h-9 flex items-center justify-center bg-gray-800 text-white rounded-md cursor-pointer hover:bg-primary">
            <FiChevronRight />
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
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
    </div>
  );
};

export default ProductSlider9;
