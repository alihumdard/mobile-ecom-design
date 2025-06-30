import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProductSlider = () => {
  const products = [
    {
      title: "Infinix Zero flip",
      price: 104999,
      oldPrice: 234999,
      discount: "55% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/sale-1.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/sale-2.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/sale-3.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/sale-4.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/sale-5.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/sale-6.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/sale-7.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/sale-8.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/sale-9.webp",
    },
    {
      title: "Vivo Y200 4G",
      price: 53500,
      oldPrice: 59999,
      discount: "11% OFF",
      rating: 4.8,
      reviews: 24,
      image: "/images/sale-10.webp",
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

  const brands = [
    { name: "Samsung", image: "/images/brand-1.svg", bg: "bg-[#000]" },
    { name: "Infinix", image: "/images/brand-2.svg", bg: "bg-[#61FD00]" },
    { name: "Oppo", image: "/images/brand-3.svg", bg: "bg-[#006B30]" },
    { name: "Xiaomi", image: "/images/brand-4.svg", bg: "bg-[#FF6A00]" },
    { name: "Vivo", image: "/images/brand-5.svg", bg: "bg-[#0074CD]" },
    { name: "Tecno", image: "/images/brand-6.svg", bg: "bg-[#000000]" },
    { name: "Realme", image: "/images/brand-7.svg", bg: "bg-[#FFD200]" },
    { name: "Itel", image: "/images/brand-8.svg", bg: "bg-[#FD004D]" },
    { name: "Apple", image: "/images/brand-9.svg", bg: "bg-[#0A0F17]" },
  ];

  const chunkedProducts = [];
  for (let i = 0; i < products.length; i += 2) {
    chunkedProducts.push(products.slice(i, i + 2));
  }

  return (
    <div className="w-full">
      <div className="relative py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 bg-[url('/images/bg-3.png')] bg-cover bg-center mt-10">
        <div className="mb-6 text-end">
          <button className="bg-white text-gray-600 text-sm font-semibold px-4 py-2 rounded hover:bg-gray-100 hover:text-black transition">
            View All
          </button>
        </div>

        {/* Navigation Arrows */}
        <div className="swiper-button-prev-custom absolute top-[19%] sm:top-[27.5%] lg:top-[31.5%] -translate-y-1/2 left-2 sm:left-4 md:left-8 lg:left-10 xl:left-36 z-10 w-9 h-9 flex items-center justify-center bg-gray-800 text-white rounded-lg cursor-pointer hover:bg-primary transition">
          <FiChevronLeft />
        </div>
        <div className="swiper-button-next-custom absolute top-[19%] lg:top-[31.5%] sm:top-[27.5%] -translate-y-1/2 right-2 sm:right-4 md:right-8 lg:right-10 xl:right-36 z-10 w-9 h-9 flex items-center justify-center bg-gray-800 text-white rounded-lg cursor-pointer hover:bg-primary transition">
          <FiChevronRight />
        </div>

        {/* Swiper */}
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
              <div className="grid grid-rows-2 gap-4">
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
        {/* Shop by Price */}
        <div>
          <h1 className="text-xl pt-20 font-semibold">Shop by Price</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-10">
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

        {/* Shop by Brand */}
        <div>
          <h1 className="text-xl pt-20 font-semibold">Shop by Brand</h1>
          <div className="py-10">
            <div className="flex flex-wrap justify-center gap-3 cursor-pointer">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className={`${brand.bg} w-[120px] h-[140px] flex items-center justify-center rounded-lg shadow-md`}
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="h-10 object-contain filter invert brightness-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
