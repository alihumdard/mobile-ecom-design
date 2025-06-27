import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const TopMenu = () => {
  const menu = [
    { image: "/images/bluetooth-speakers.webp", name: "Bluetooth Speakers" },
    { image: "/images/laptops.webp", name: "Laptops" },
    { image: "/images/mobile-chargers (1).webp", name: "Wall Chargers" },
    { image: "/images/mobile-chargers.webp", name: "Mobile Chargers" },
    { image: "/images/bluetooth-speakers.webp", name: "Headphones" },
    { image: "/images/bluetooth-speakers.webp", name: "Smart Watches" },
    { image: "/images/bluetooth-speakers.webp", name: "Power Banks" },
    { image: "/images/bluetooth-speakers.webp", name: "Air Purifiers" },
  ];

  return (
    <div className="px-24 shadow-sm">
      <div className="px-16 py-3 bg-white relative">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 7 },
          }}
        >
          {menu.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <img src={item.image} alt={item.name} className="w-10 h-9" />
                <p className="text-sm text-gray-600 mt-2 font-medium">
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="group swiper-button-prev-custom absolute left-14 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-lg shadow-md cursor-pointer hover:bg-primary transition-colors">
          <FiChevronLeft className="text-gray-600 text-lg group-hover:text-white transition-colors duration-200" />
        </div>

        <div className="group swiper-button-next-custom absolute right-16 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-lg shadow-md cursor-pointer hover:bg-primary transition-colors">
          <FiChevronRight className="text-gray-600 text-lg group-hover:text-white transition-colors duration-200" />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
