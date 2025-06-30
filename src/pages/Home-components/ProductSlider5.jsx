import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProductSlider5 = () => {
  const products = [
    {
      title: "Infinix Zero flip",
      price: 104999,
      oldPrice: 234999,
      discount: "55% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/tab1.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/tab2.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/tab3.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/tab4.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/tab5.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/tab6.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/tab7.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/tab8.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/tab9.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/tab10.webp",
    },
  ];

  const chunkedProducts = [];
  for (let i = 0; i < products.length; i += 2) {
    chunkedProducts.push(products.slice(i, i + 2));
  }

  return (
    <div className="w-full">
      <div className="relative py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 bg-[url('/images/bg-2.png')] bg-cover bg-center mt-10">
        <div className="mb-6 flex justify-between items-center flex-wrap gap-3">
          <h1 className="text-white text-lg sm:text-xl font-bold">Latest Tablets</h1>
          <button className="bg-white text-gray-600 text-sm font-semibold px-4 py-2 rounded hover:bg-gray-100 hover:text-black transition">
            View All
          </button>
        </div>

        <div className="relative">
          <div className="swiper-button-prev-custom absolute top-[50%] -translate-y-1/2 left-1 z-10 w-9 h-9 flex items-center justify-center bg-gray-800 text-white rounded-lg cursor-pointer hover:bg-primary transition">
            <FiChevronLeft />
          </div>
          <div className="swiper-button-next-custom absolute top-[50%] -translate-y-1/2 right-1 z-10 w-9 h-9 flex items-center justify-center bg-gray-800 text-white rounded-lg cursor-pointer hover:bg-primary transition">
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
                        className="w-full h-40 sm:h-48 object-contain mb-3"
                      />
                      <img
                        src="/images/season-logo.png"
                        alt="sale badge"
                        className="absolute top-2 right-2 w-10 h-10 sm:w-12 sm:h-12"
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

      <div>
        <h1 className="text-xl font-semibold py-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
          Shop More Categories
        </h1>
        <div className="bg-[#f9dcff] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 flex flex-wrap gap-5 justify-center py-10 mb-20">
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
      </div>

      <div className="">
        <img
          src="/images/order-packaging-web.jpg"
          className="w-full h-auto rounded-xl"
          alt="Packaging"
        />
      </div>
    </div>
  );
};

export default ProductSlider5;
