import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CategorieHero = () => {
  const item = [
    { img: "/images/banner-3.jpg" },
    { img: "/images/banner-7.jpg" },
    { img: "/images/banner-8.jpg" },
    { img: "/images/banner-2.jpg" },
    { img: "/images/banner-1.jpg" },
    { img: "/images/banner-4.jpg" },
    { img: "/images/banner-5.jpg" },
    { img: "/images/banner-6.jpg" },
    { img: "/images/banner-9.jpg" },
  ];

  return (
    <div className="relative w-full pt-5">
      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-custom absolute top-1/2 left-2 sm:left-4 z-10 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center shadow hover:bg-primary group cursor-pointer transition">
        <FaChevronLeft className="text-gray-600 group-hover:text-white text-xs sm:text-sm" />
      </div>
      <div className="swiper-button-next-custom absolute top-1/2 right-2 sm:right-4 z-10 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center shadow hover:bg-primary group cursor-pointer transition">
        <FaChevronRight className="text-gray-600 group-hover:text-white text-xs sm:text-sm" />
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        className="rounded-md"
      >
        {item.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.img}
              alt={`Banner ${index + 1}`}
              className="w-full h-[160px] sm:h-[250px] md:h-[350px] lg:h-[400px] object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorieHero;
