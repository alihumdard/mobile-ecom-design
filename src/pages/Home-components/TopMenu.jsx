import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import URLS from "../../config/urls.config";
import { Link } from "react-router-dom";

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
    <div className="w-full shadow-sm bg-white relative">
      {/* Navigation Buttons with updated IDs */}
      <button className="topmenu-button-prev lg:ml-48 absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-white p-2 rounded-lg shadow hover:bg-gray-100">
        <FiChevronLeft size={20} />
      </button>
      <button className="topmenu-button-next absolute lg:mr-48 top-1/2 -translate-y-1/2 right-2 z-10 bg-white p-2 rounded-lg shadow hover:bg-gray-100">
        <FiChevronRight size={20} />
      </button>

      {/* Swiper Content */}
      <div className="px-8 py-4 lg:px-60">
        <Swiper
          slidesPerView={2.5}
          spaceBetween={10}
          navigation={{
            nextEl: ".topmenu-button-next",
            prevEl: ".topmenu-button-prev",
          }}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 3 },
            480: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 7 },
          }}
        >
          {menu.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={URLS.Category} className="flex flex-col items-center text-center group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-9 object-contain"
                />
                <p className="text-sm text-gray-600 mt-2 font-medium whitespace-nowrap">
                  {item.name}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopMenu;
