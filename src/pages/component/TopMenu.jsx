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
    <div className="w-full shadow-sm bg-white">
      <div className="relative px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-4">
        <Swiper
          slidesPerView={2.5}
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {slidesPerView: 3},
            480: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 7 },
          }}
        >
          {menu.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-9 object-contain"
                />
                <p className="text-sm text-gray-600 mt-2 font-medium whitespace-nowrap">
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopMenu;
