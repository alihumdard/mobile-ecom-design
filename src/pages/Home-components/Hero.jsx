import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const item = [
      { img: "/images/banner-7.jpg" },
      { img: "/images/banner-8.jpg" },
    { img: "/images/banner-2.jpg" },
    { img: "/images/banner-1.jpg" },
    { img: "/images/banner-3.jpg" },
    { img: "/images/banner-4.jpg" },
    { img: "/images/banner-5.jpg" },
    { img: "/images/banner-6.jpg" },
    { img: "/images/banner-9.jpg" },
  ];

  return (
    <div>
      <div className="relative w-full pt-5">
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute top-1/2 left-4 z-10 -translate-y-1/2 w-9 h-9 rounded-lg bg-white flex items-center justify-center shadow hover:bg-primary group cursor-pointer">
          <FaChevronLeft className="text-gray-600 group-hover:text-white text-sm" />
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-4 z-10 -translate-y-1/2 w-9 h-9 rounded-lg bg-white flex items-center justify-center shadow hover:bg-primary group cursor-pointer">
          <FaChevronRight className="text-gray-600 group-hover:text-white text-sm" />
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          className="rounded-md"
        >
          {item.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide.img}
                alt={`Banner ${index + 1}`}
                className="w-full h-[250px] md:h-[400px] object-cover rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
