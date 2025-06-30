import React, { useState } from "react";
import {
  FaTimes,
  FaTruck,
  FaExclamationCircle,
  FaChevronDown,
  FaChevronUp,
  FaMobileAlt,
  FaClock,
  FaHeadphones,
  FaWind,
  FaUser,
  FaChargingStation,
  FaVolumeUp,
  FaBatteryFull,
  FaTabletAlt,
  FaLaptop,
  FaTv,
  FaMotorcycle,
} from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  const [expanded, setExpanded] = useState(null);

  const toggleCategory = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const categories = [
    {
      title: "Mobiles",
      item1: "Sumsung",
      item2: "infnix",
      item3: "Oppo",
      item4: "Vivo",
      item5: "Tecno",
      item6: "Realme",
      item7: "Itel",
      icon: <FaMobileAlt />,
    },
    {
      title: "watches",
      item1: "Samsung",
      item2: "Dany",
      item3: "Assorted",
      item4: "Zero",
      item5: "Sveston",
      item6: "Realme",
      item7: "Yolo",
      icon: <FaClock />,
    },
    {
      title: "Wireless Earbuds",
      item1: "Xiaomi",
      item2: "Audionic",
      item3: "Soundpeats",
      item4: "Assorted",
      item5: "Airox",
      item6: "Zero",
      item7: "Lenovo",
      icon: <FaHeadphones />,
    },
    {
      title: "Air Purifiers",
      item1: "Xiaomi",
      item2: "Beurer",
      icon: <FaWind />,
    },
    {
      title: "Personal Cares",
      item1: "Sumsung",
      item2: "infnix",
      item3: "Oppo",
      item4: "Vivo",
      item5: "Tecno",
      item6: "Realme",
      item7: "Itel",
      icon: <FaUser />,
    },
    {
      title: "Mobiles Accessories",
      item1: "Sumsung",
      item2: "infnix",
      item3: "Oppo",
      item4: "Vivo",
      item5: "Tecno",
      item6: "Realme",
      item7: "Itel",
      icon: <FaChargingStation />,
    },
    {
      title: "Bluetooth Speakers",
      item1: "Xiaomi",
      item2: "Sound Crush",
      item3: "Audionic",
      item4: "Faster",
      item5: "Jbl",
      item6: "Tronsmart",
      item7: "Anker",
      icon: <FaVolumeUp />,
    },
    {
      title: "Power Banks",
      item1: "Xiaomi",
      item2: "Baseus",
      item3: "Faster",
      item4: "Joyroom",
      icon: <FaBatteryFull />,
    },
    {
      title: "Tablets",
      item1: "Apple",
      item2: "Samsung",
      item3: "Xiaomi",
      item4: "G-tide",
      item5: "Infinix",
      item6: "Huawei",
      item7: "Tecno",
      icon: <FaTabletAlt />,
    },
    {
      title: "Laptops",
      item1: "Apple",
      item2: "Dell",
      item3: "Hp",
      item4: "Lenovo",
      icon: <FaLaptop />,
    },
    {
      title: "TV & Home Appliances",
      item1: "Sumsung",
      item2: "infnix",
      item3: "Oppo",
      item4: "Vivo",
      item5: "Tecno",
      item6: "Realme",
      item7: "Itel",
      icon: <FaTv />,
    },
    {
      title: "Motorcycle",
      item1: "Honda",
      item2: "Yamaha",
      item3: "Union Star",
      item4: "Unique",
      icon: <FaMotorcycle />,
    },
  ];

  const list = [
    {
      title: "Best Mobiles Under 10000",
    },
    {
      title: "Best Mobiles Under 15000",
    },
    {
      title: "Best Mobiles Under 20000",
    },
    {
      title: "Best Mobiles Under 30000",
    },
    {
      title: "Best Mobiles Under 40000",
    },
    {
      title: "Best Mobiles Under 50000",
    },
    {
      title: "Best Mobiles Under 60000",
    },
    {
      title: "Best Mobiles Under 80000",
    },
    {
      title: "Best Mobiles Under 100000",
    },
    {
      title: "Best 5G Phones",
    },
    {
      title: "Best 5G Phones",
    },
    {
      title: "Best Camera Phones",
    },
    {
      title: "Best Selfie Camera Phones",
    },
    {
      title: "Best PUBG Mobiles",
    },
    {
      title: "Most Expensive Phones",
    },
    {
      title: "Top 10 Fast Charging Mobiles",
    },
    {
      title: "Best Mobiles of 2025",
    },
  ];

  const main = [
    {
      title: "About",
    },
    {
      title: "FAQs",
    },
    {
      title: "Careers",
    },
    {
      title: "Contact",
    },
    {
      title: "Privacy Policy",
    },
    {
      title: "Press & Blog",
    },
    {
      title: "Installments Plan",
    },
    {
      title: "Terms & Condition",
    },
    {
      title: "Warranty Center",
    },
  ];

  return (
    <div
      className={`fixed overflow-y-auto bg-white top-0 left-0 h-full z-50 transform transition-transform duration-300 shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } 
      w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[23%]`}
    >
      <div className="bg-white h-full flex flex-col">
        {/* HEADER AREA */}
        <div className="bg-primary text-white px-4 sm:px-6 md:px-8 py-4 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 p-2 rounded-full bg-white text-primary text-xl shadow-md transition duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <FaTimes />
          </button>

          <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 md:mt-10">Mobile Ecommerce</h2>
          <p className="text-xs sm:text-sm text-white/80 mt-1">
            Explore products & features
          </p>

          <div className="pt-3">
            <button className="w-full sm:w-1/2 bg-white text-primary font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-100 transition">
              Log In
            </button>
          </div>

          <div className="space-y-3 sm:space-y-4 py-3 sm:py-4">
            <div className="flex items-center gap-2 sm:gap-3 text-white cursor-pointer transition-all duration-200 hover:translate-x-1">
              <FaTruck className="text-base sm:text-lg" />
              <p className="text-xs sm:text-sm font-medium">Tracking my order</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-white cursor-pointer transition-all duration-200 hover:translate-x-1">
              <FaExclamationCircle className="text-base sm:text-lg" />
              <p className="text-xs sm:text-sm font-medium">Launch a Complaint</p>
            </div>
          </div>
        </div>

        {/* CATEGORY CONTENT (SCROLLABLE) */}
        <div className="flex-1 p-4 sm:p-6 md:p-8">
          <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 font-semibold">Categories</p>
          <div className="space-y-2 sm:space-y-3">
            {categories.map((cat, index) => (
              <div key={index} className="rounded-md">
                <div
                  className="flex justify-between items-center cursor-pointer text-gray-600 font-medium hover:text-black text-sm sm:text-base"
                  onClick={() => toggleCategory(index)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-primary">{cat.icon}</span>
                    <span>{cat.title}</span>
                  </div>
                  {expanded === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {expanded === index && (
                  <div className="flex flex-col px-3 sm:px-4 md:px-5 py-2 sm:py-3 mt-2 sm:mt-3 rounded-md bg-gray-50 shadow-sm transition duration-300 ease-in-out">
                    {cat.item1 && (
                      <a
                        href="#"
                        className="text-xs sm:text-sm text-gray-600 hover:bg-gray-100 px-2 sm:px-3 py-1 sm:py-2 rounded font-medium transition-all duration-200 cursor-pointer"
                      >
                        {cat.item1}
                      </a>
                    )}
                    {cat.item2 && (
                      <a
                        href="#"
                        className="text-xs sm:text-sm text-gray-600 hover:bg-gray-100 px-2 sm:px-3 py-1 sm:py-2 rounded font-medium transition-all duration-200 cursor-pointer"
                      >
                        {cat.item2}
                      </a>
                    )}
                    {cat.item3 && (
                      <a
                        href="#"
                        className="text-xs sm:text-sm text-gray-600 hover:bg-gray-100 px-2 sm:px-3 py-1 sm:py-2 rounded font-medium transition-all duration-200 cursor-pointer"
                      >
                        {cat.item3}
                      </a>
                    )}
                    {cat.item4 && (
                      <a
                        href="#"
                        className="text-xs sm:text-sm text-gray-600 hover:bg-gray-100 px-2 sm:px-3 py-1 sm:py-2 rounded font-medium transition-all duration-200 cursor-pointer"
                      >
                        {cat.item4}
                      </a>
                    )}
                    {cat.item5 && (
                      <a
                        href="#"
                        className="text-xs sm:text-sm text-gray-600 hover:bg-gray-100 px-2 sm:px-3 py-1 sm:py-2 rounded font-medium transition-all duration-200 cursor-pointer"
                      >
                        {cat.item5}
                      </a>
                    )}
                    {cat.item6 && (
                      <a
                        href="#"
                        className="text-xs sm:text-sm text-gray-600 hover:bg-gray-100 px-2 sm:px-3 py-1 sm:py-2 rounded font-medium transition-all duration-200 cursor-pointer"
                      >
                        {cat.item6}
                      </a>
                    )}
                    {cat.item7 && (
                      <a
                        href="#"
                        className="text-xs sm:text-sm text-gray-600 hover:bg-gray-100 px-2 sm:px-3 py-1 sm:py-2 rounded font-medium transition-all duration-200 cursor-pointer"
                      >
                        {cat.item7}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* popular list */}
        <div className="p-4 sm:p-6 md:p-8 bg-white rounded-md shadow-md">
          <p className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">
            Popular List
          </p>

          <div className="space-y-1">
            {list.map((key, index) => (
              <div key={index}>
                <p className="text-xs text-gray-700 hover:text-white hover:bg-primary p-1 sm:p-2 mr-8 sm:mr-12 md:mr-16 border border-gray-300 rounded-md cursor-pointer font-medium">
                  {key.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-8 bg-white rounded-md shadow-md">
          <p className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 border-b pb-2">
            Company Info
          </p>

          <div className="space-y-1">
            {main.map((key, index) => (
              <div key={index}>
                <p className="text-xs text-gray-700 p-1 sm:p-2 mr-12 sm:mr-16 md:mr-20 rounded-md cursor-pointer font-medium">
                  {key.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;