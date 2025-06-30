import React, { useState } from "react";
import {
  FaChartBar,
  FaSortAmountUpAlt,
  FaSortAmountDownAlt,
  FaTruck,
  FaShoppingCart,
  FaStar,
  FaFilter,
  FaTimes,
  FaBolt,
  FaBullseye,
  FaBluetooth,
  FaWifi,
  FaSignal,
  FaNetworkWired,
  FaSatelliteDish,
  FaCamera,
  FaMobileAlt,
} from "react-icons/fa";
import { MdCameraAlt, MdPhotoCamera, MdMemory } from "react-icons/md";
import { BiChip } from "react-icons/bi";
import { GiProcessor } from "react-icons/gi";

const Main = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    sort: null,
    delivery: false,
    inStock: false,
    priceRange: null,
    camera: null,
    ram: null,
    memory: null,
    brand: null,
    screenSize: null,
    features: [],
  });

  const toggleFilters = () => setShowFilters(!showFilters);

  const handleFilterChange = (filterType, value) => {
    setActiveFilters((prev) => {
      if (filterType === "features") {
        const updatedFeatures = prev.features.includes(value)
          ? prev.features.filter((f) => f !== value)
          : [...prev.features, value];
        return { ...prev, features: updatedFeatures };
      }
      return {
        ...prev,
        [filterType]: prev[filterType] === value ? null : value,
      };
    });
  };

  const productss = Array(40).fill({
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=60",
    title: "Wireless Headphones Pro",
    rating: 4.8,
    reviews: 21,
    price: 8999,
    oldPrice: 10999,
    discount: "18% OFF",
  });

  const priceRanges = [
    "Below ₨ 15,000",
    "₨ 15,000 - ₨ 25,000",
    "₨ 25,000 - ₨ 40,000",
    "₨ 40,000 - ₨ 60,000",
    "₨ 60,000 - ₨ 80,000",
    "₨ 80,000 - ₨ 100,000",
    "₨ 100,000 - ₨ 150,000",
  ];

  const cameraOptions = [
    { label: "Minimum 4MP", value: "4MP", icon: <FaCamera size={16} /> },
    { label: "Minimum 8MP", value: "8MP", icon: <MdCameraAlt size={16} /> },
    { label: "Minimum 12MP", value: "12MP", icon: <MdPhotoCamera size={16} /> },
  ];

  const ramOptions = [
    { label: "1GB or Less", value: "1GB", icon: <BiChip size={16} /> },
    { label: "2GB", value: "2GB", icon: <MdMemory size={16} /> },
    { label: "3GB", value: "3GB", icon: <GiProcessor size={16} /> },
    { label: "4GB", value: "4GB", icon: <MdMemory size={16} /> },
    { label: "6GB Above", value: "6GB", icon: <BiChip size={16} /> },
  ];

  const memoryOptions = [
    { label: "4GB", value: "4GB", icon: <BiChip size={16} /> },
    { label: "8GB", value: "8GB", icon: <MdMemory size={16} /> },
    { label: "16GB", value: "16GB", icon: <GiProcessor size={16} /> },
    { label: "32GB", value: "32GB", icon: <MdMemory size={16} /> },
    { label: "64GB Above", value: "64GB", icon: <BiChip size={16} /> },
    { label: "128GB", value: "128GB", icon: <BiChip size={16} /> },
    { label: "256GB", value: "256GB", icon: <BiChip size={16} /> },
    { label: "512GB", value: "512GB", icon: <BiChip size={16} /> },
  ];

  const brands = [
    { name: "Samsung", color: "#1428a0", icon: "/images/category1.svg" },
    { name: "Infinix", color: "#1cbe8b", icon: "/images/category2.svg" },
    { name: "Oppo", color: "#9fd84d", icon: "/images/category3.svg" },
    { name: "Xiaomi", color: "#f65c2a", icon: "/images/category4.svg" },
    { name: "Vivo", color: "#0165e1", icon: "/images/category6.svg" },
    { name: "Techno", color: "#336699", icon: null },
    { name: "Realme", color: "#ffd500", icon: "/images/category7.svg" },
    { name: "Itel", color: "#e61c23", icon: "/images/category8.svg" },
  ];

  const screenSizes = [
    "4 inch and below",
    "4.0 inch to 4.5 inch",
    "4.5 inch to 5.0 inch",
    "5.0 inch to 5.5 inch",
    "5.5 inch to 6.9 inch",
  ];

  const features = [
    { name: "Flash Light", icon: <FaBolt size={16} /> },
    { name: "Auto Focus", icon: <FaBullseye size={16} /> },
    { name: "Bluetooth", icon: <FaBluetooth size={16} /> },
    { name: "3G", icon: <FaSignal size={16} /> },
    { name: "4G/LTE", icon: <FaNetworkWired size={16} /> },
    { name: "WiFi", icon: <FaWifi size={16} /> },
    { name: "NFC", icon: <FaSatelliteDish size={16} /> },
  ];

  const sortOptions = [
    { label: "Popularity", icon: <FaChartBar size={16} /> },
    { label: "Prices (Low to High)", icon: <FaSortAmountUpAlt size={16} /> },
    { label: "Prices (High to Low)", icon: <FaSortAmountDownAlt size={16} /> },
  ];

  return (
    <div className="bg-gray-100 px-3 sm:px-14 py-5">
      <div className="px-4 sm:px-6 md:px-10 lg:px-5 py-5 bg-white text-center md:text-left">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
          Buy Mobile Phones in Pakistan 2025
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-full md:max-w-3xl mx-auto md:mx-0">
          916 results for Mobiles. Find a wide range of mobiles at the lowest
          rates in Pakistan, only at{" "}
          <span className="font-semibold text-blue-600">Priceoye</span>.
        </p>
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden mt-6 ml-4 flex justify-between items-center">
        <button
          onClick={toggleFilters}
          className="flex items-center gap-2 bg-primary text-white py-3 px-6 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out"
        >
          {showFilters ? (
            <>
              <FaTimes className="text-lg" />
              Close Filters
            </>
          ) : (
            <>
              <FaFilter className="text-lg" />
              Filters
            </>
          )}
        </button>

        {activeFilters.sort && (
          <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
            {activeFilters.sort}
          </span>
        )}
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Filters Sidebar */}
        <div
          className={`w-full lg:w-[34%] bg-white rounded-md shadow p-4 space-y-6 text-sm my-4 transition-all duration-300 ${
            showFilters ? "block" : "hidden lg:block"
          }`}
        >
          {/* Sorting */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">SORTING</h3>
            <div className="space-y-2">
              {sortOptions.map((option, idx) => (
                <label
                  key={idx}
                  className={`flex items-center justify-between pl-2 rounded cursor-pointer ${
                    activeFilters.sort === option.label
                      ? "bg-gray-200"
                      : "bg-gray-100"
                  }`}
                  onClick={() => handleFilterChange("sort", option.label)}
                >
                  <div>
                    <input
                      type="radio"
                      name="sort"
                      checked={activeFilters.sort === option.label}
                      onChange={() => {}}
                      className="mr-2"
                    />
                    {option.label}
                  </div>
                  <div className="bg-orange-500 text-white p-4 rounded">
                    {option.icon}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Express Delivery */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">EXPRESS DELIVERY</h3>
            <label
              className={`flex items-center justify-between pl-2 rounded cursor-pointer ${
                activeFilters.delivery ? "bg-gray-200" : "bg-gray-100"
              }`}
              onClick={() =>
                handleFilterChange("delivery", !activeFilters.delivery)
              }
            >
              <div>
                <input
                  type="checkbox"
                  checked={activeFilters.delivery}
                  onChange={() => {}}
                  className="mr-2"
                />
                Express Delivery
              </div>
              <div className="bg-green-500 text-white p-4 rounded">
                <FaTruck size={16} />
              </div>
            </label>
          </div>

          {/* In Stock */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">IN STOCK</h3>
            <label
              className={`flex items-center justify-between pl-2 rounded cursor-pointer ${
                activeFilters.inStock ? "bg-gray-200" : "bg-gray-100"
              }`}
              onClick={() =>
                handleFilterChange("inStock", !activeFilters.inStock)
              }
            >
              <div>
                <input
                  type="checkbox"
                  checked={activeFilters.inStock}
                  onChange={() => {}}
                  className="mr-2"
                />
                In Stock
              </div>
              <div className="bg-blue-500 text-white p-4 rounded">
                <FaShoppingCart size={16} />
              </div>
            </label>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">PRICE RANGE</h3>
            <div className="space-y-2">
              {priceRanges.map((range, idx) => (
                <button
                  key={idx}
                  className={`w-full py-2 px-3 rounded font-semibold transition ${
                    activeFilters.priceRange === range
                      ? "bg-pink-600 text-white"
                      : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                  }`}
                  onClick={() => handleFilterChange("priceRange", range)}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Camera */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">PRIMARY CAMERA</h3>
            <div className="space-y-2">
              {cameraOptions.map((option, idx) => (
                <label
                  key={idx}
                  className={`flex items-center justify-between pl-2 rounded cursor-pointer ${
                    activeFilters.camera === option.value
                      ? "bg-gray-200"
                      : "bg-gray-100"
                  }`}
                  onClick={() => handleFilterChange("camera", option.value)}
                >
                  <div>
                    <input
                      type="radio"
                      name="camera"
                      checked={activeFilters.camera === option.value}
                      onChange={() => {}}
                      className="mr-2"
                    />
                    {option.label}
                  </div>
                  <div className="bg-[#00a19e] text-white p-4 rounded">
                    {option.icon}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* RAM */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">RAM</h3>
            <div className="space-y-2">
              {ramOptions.map((option, idx) => (
                <label
                  key={idx}
                  className={`flex items-center justify-between pl-2 rounded cursor-pointer ${
                    activeFilters.ram === option.value
                      ? "bg-gray-200"
                      : "bg-gray-100"
                  }`}
                  onClick={() => handleFilterChange("ram", option.value)}
                >
                  <div>
                    <input
                      type="radio"
                      name="ram"
                      checked={activeFilters.ram === option.value}
                      onChange={() => {}}
                      className="mr-2"
                    />
                    {option.label}
                  </div>
                  <div className="bg-[#072f61] text-white p-4 rounded">
                    {option.icon}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Memory */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">MEMORY</h3>
            <div className="space-y-2">
              {memoryOptions.map((option, idx) => (
                <label
                  key={idx}
                  className={`flex items-center justify-between pl-2 rounded cursor-pointer ${
                    activeFilters.memory === option.value
                      ? "bg-gray-200"
                      : "bg-gray-100"
                  }`}
                  onClick={() => handleFilterChange("memory", option.value)}
                >
                  <div>
                    <input
                      type="radio"
                      name="memory"
                      checked={activeFilters.memory === option.value}
                      onChange={() => {}}
                      className="mr-2"
                    />
                    {option.label}
                  </div>
                  <div className="bg-[#89294a] text-white p-4 rounded">
                    {option.icon}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">BRANDS</h3>
            <div className="space-y-2">
              {brands.map((brand, idx) => (
                <label
                  key={idx}
                  className={`flex items-center justify-between pl-2 rounded cursor-pointer ${
                    activeFilters.brand === brand.name
                      ? "bg-gray-200"
                      : "bg-gray-100"
                  }`}
                  onClick={() => handleFilterChange("brand", brand.name)}
                >
                  <div className="text-gray-500">
                    <input
                      type="radio"
                      name="brand"
                      checked={activeFilters.brand === brand.name}
                      onChange={() => {}}
                      className="mr-2"
                    />
                    {brand.name}
                  </div>
                  <div
                    className="p-3 rounded"
                    style={{ backgroundColor: brand.color }}
                  >
                    {brand.icon ? (
                      <img
                        src={brand.icon}
                        className="h-8 w-8 invert brightness-0"
                        alt={brand.name}
                      />
                    ) : (
                      <p className="text-xs text-white">Techno</p>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Screen Size */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">SCREEN SIZE</h3>
            <div className="space-y-2">
              {screenSizes.map((size, idx) => (
                <label
                  key={idx}
                  className={`flex items-center justify-between pl-2 rounded cursor-pointer ${
                    activeFilters.screenSize === size
                      ? "bg-gray-200"
                      : "bg-gray-100"
                  }`}
                  onClick={() => handleFilterChange("screenSize", size)}
                >
                  <div>
                    <input
                      type="radio"
                      name="screenSize"
                      checked={activeFilters.screenSize === size}
                      onChange={() => {}}
                      className="mr-2"
                    />
                    {size}
                  </div>
                  <div className="bg-[#1b758d] text-white p-4 rounded">
                    <FaMobileAlt size={16} />
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2">FEATURES</h3>
            <div className="space-y-2">
              {features.map((feature, idx) => (
                <label
                  key={idx}
                  className={`flex items-center justify-between pl-2 rounded cursor-pointer ${
                    activeFilters.features.includes(feature.name)
                      ? "bg-gray-200"
                      : "bg-gray-100"
                  }`}
                  onClick={() => handleFilterChange("features", feature.name)}
                >
                  <div>
                    <input
                      type="checkbox"
                      checked={activeFilters.features.includes(feature.name)}
                      onChange={() => {}}
                      className="mr-2"
                    />
                    {feature.name}
                  </div>
                  <div className="bg-[#7a0097] text-white p-4 rounded">
                    {feature.icon}
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full">
          {/* Active Filters */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters).map(([key, value]) => {
              if (!value || (Array.isArray(value) && value.length === 0))
                return null;

              if (Array.isArray(value)) {
                return value.map((val, idx) => (
                  <span
                    key={`${key}-${idx}`}
                    className="text-sm bg-gray-200 px-3 py-1 rounded-full flex items-center"
                  >
                    {val}
                    <button
                      onClick={() => handleFilterChange(key, val)}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      ×
                    </button>
                  </span>
                ));
              }

              if (typeof value === "boolean" && value) {
                return (
                  <span
                    key={key}
                    className="text-sm bg-gray-200 px-3 py-1 rounded-full flex items-center"
                  >
                    {key === "delivery" ? "Express Delivery" : "In Stock"}
                    <button
                      onClick={() => handleFilterChange(key, false)}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      ×
                    </button>
                  </span>
                );
              }

              return (
                <span
                  key={key}
                  className="text-sm bg-gray-200 px-3 py-1 rounded-full flex items-center"
                >
                  {value}
                  <button
                    onClick={() => handleFilterChange(key, null)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </span>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 p-4">
            {productss.map((product, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-md shadow hover:shadow-lg transition-all cursor-pointer"
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
    </div>
  );
};

export default Main;
