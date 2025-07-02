import React, { useState } from "react";

const ProductRecommendations = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Mobiles",
    "Bluetooth Speakers",
    "Mobile Chargers",
    "Trimmers Shaver",
    "Smart Watches",
    "Laptops",
    "Hair Straightners Cutlers",
    "Mobile Cables",
  ];

  // Sample product data (same as before)
  const products = [
    {
      id: 1,
      name: "Fayvan F666",
      price: "Rs 3,299",
      originalPrice: "Rs 3,999",
      discount: "18% OFF",
      rating: "3.1",
      category: "Mobiles",
    },
    {
      id: 2,
      name: "Hello Tech G7",
      price: "Rs 2,399",
      originalPrice: "Rs 2,399",
      discount: "5% OFF",
      rating: "5.1",
      category: "Bluetooth Speakers",
    },
    {
      id: 3,
      name: "Marz S-841 Bluetooth Speaker",
      price: "Rs 2,199",
      originalPrice: "Rs 4,000",
      discount: "45% OFF",
      rating: "6.9",
      category: "Bluetooth Speakers",
    },
    {
      id: 4,
      name: "Xiaomi 14",
      price: "Rs 261,999",
      originalPrice: "Rs 319,999",
      discount: "18% OFF",
      rating: "4.17",
      category: "Mobiles",
    },
    {
      id: 5,
      name: "Samsung 2 Pin 25W PD Adapter (Type C)",
      price: "Rs 2,649",
      originalPrice: "Rs 4,499",
      discount: "41% OFF",
      rating: "4.9 (322 Reviews)",
      category: "Mobile Chargers",
    },
    {
      id: 6,
      name: "Samsung Galaxy A34",
      price: "Rs 34,999",
      originalPrice: "Rs 39,999",
      discount: "13% OFF",
      rating: "4.9 (151 Reviews)",
      category: "Mobiles",
    },
    {
      id: 7,
      name: "Kernel KM-3909 Hair Clipper",
      price: "Rs 2,400",
      originalPrice: "Rs 3,200",
      discount: "25% OFF",
      rating: "5.3",
      category: "Trimmers Shaver",
    },
    {
      id: 8,
      name: "VGO TEL 1888",
      price: "Rs 4,600",
      originalPrice: "Rs 5,999",
      discount: "23% OFF",
      rating: "4.9 (94 Reviews)",
      category: "Smart Watches",
    },
    {
      id: 9,
      name: "JBL M3 Mini Wireless Bluetooth Speaker",
      price: "Rs 1,999",
      originalPrice: "Rs 3,500",
      discount: "43% OFF",
      rating: "4.5",
      category: "Bluetooth Speakers",
    },
    {
      id: 10,
      name: "OnePlus Nord CE 3",
      price: "Rs 24,999",
      originalPrice: "Rs 28,999",
      discount: "14% OFF",
      rating: "4.3 (210 Reviews)",
      category: "Mobiles",
    },
    {
      id: 11,
      name: "Boat Stone 350 Bluetooth Speaker",
      price: "Rs 1,799",
      originalPrice: "Rs 2,999",
      discount: "40% OFF",
      rating: "4.2 (156 Reviews)",
      category: "Bluetooth Speakers",
    },
    {
      id: 12,
      name: "Apple 20W USB-C Power Adapter",
      price: "Rs 1,899",
      originalPrice: "Rs 2,499",
      discount: "24% OFF",
      rating: "4.7 (89 Reviews)",
      category: "Mobile Chargers",
    },
    {
      id: 13,
      name: "Philips Beard Trimmer BT3215",
      price: "Rs 1,499",
      originalPrice: "Rs 2,199",
      discount: "32% OFF",
      rating: "4.4 (76 Reviews)",
      category: "Trimmers Shaver",
    },
    {
      id: 14,
      name: "Noise ColorFit Pro 3",
      price: "Rs 2,999",
      originalPrice: "Rs 4,499",
      discount: "33% OFF",
      rating: "4.1 (342 Reviews)",
      category: "Smart Watches",
    },
    {
      id: 15,
      name: "HP Pavilion 15",
      price: "Rs 54,990",
      originalPrice: "Rs 62,990",
      discount: "13% OFF",
      rating: "4.5 (128 Reviews)",
      category: "Laptops",
    },
    {
      id: 16,
      name: "Agaro Hair Straightener",
      price: "Rs 999",
      originalPrice: "Rs 1,799",
      discount: "44% OFF",
      rating: "3.9 (54 Reviews)",
      category: "Hair Straightners Cutlers",
    },
    {
      id: 17,
      name: "Amazon Basics USB-C Cable",
      price: "Rs 349",
      originalPrice: "Rs 599",
      discount: "42% OFF",
      rating: "4.0 (231 Reviews)",
      category: "Mobile Cables",
    },
    {
      id: 18,
      name: "Realme Buds Wireless 2",
      price: "Rs 1,299",
      originalPrice: "Rs 1,999",
      discount: "35% OFF",
      rating: "4.3 (187 Reviews)",
      category: "Wireless Earbuds",
    },
    {
      id: 19,
      name: "Redmi Note 12 Pro",
      price: "Rs 23,999",
      originalPrice: "Rs 27,999",
      discount: "14% OFF",
      rating: "4.4 (423 Reviews)",
      category: "Mobiles",
    },
    {
      id: 20,
      name: "Sony SRS-XB12 Bluetooth Speaker",
      price: "Rs 3,499",
      originalPrice: "Rs 4,999",
      discount: "30% OFF",
      rating: "4.6 (98 Reviews)",
      category: "Bluetooth Speakers",
    },
    {
      id: 21,
      name: "Ambrane 20W Fast Charger",
      price: "Rs 599",
      originalPrice: "Rs 999",
      discount: "40% OFF",
      rating: "4.1 (143 Reviews)",
      category: "Mobile Chargers",
    },
    {
      id: 22,
      name: "Nova NG-1250 Hair Clipper",
      price: "Rs 1,199",
      originalPrice: "Rs 1,899",
      discount: "37% OFF",
      rating: "4.0 (67 Reviews)",
      category: "Trimmers Shaver",
    },
    {
      id: 23,
      name: "Fire-Boltt Ring 3",
      price: "Rs 1,799",
      originalPrice: "Rs 2,999",
      discount: "40% OFF",
      rating: "4.2 (215 Reviews)",
      category: "Smart Watches",
    },
    {
      id: 24,
      name: "Lenovo IdeaPad Slim 3",
      price: "Rs 36,990",
      originalPrice: "Rs 42,990",
      discount: "14% OFF",
      rating: "4.3 (91 Reviews)",
      category: "Laptops",
    },
    {
      id: 25,
      name: "Philips HP8300 Hair Straightener",
      price: "Rs 1,299",
      originalPrice: "Rs 2,299",
      discount: "43% OFF",
      rating: "4.1 (78 Reviews)",
      category: "Hair Straightners Cutlers",
    },
    {
      id: 26,
      name: "Portronics POR-356 USB Cable",
      price: "Rs 199",
      originalPrice: "Rs 399",
      discount: "50% OFF",
      rating: "3.9 (112 Reviews)",
      category: "Mobile Cables",
    },
    {
      id: 27,
      name: "Oppo Enco Air 2",
      price: "Rs 1,499",
      originalPrice: "Rs 2,199",
      discount: "32% OFF",
      rating: "4.4 (156 Reviews)",
      category: "Wireless Earbuds",
    },
    {
      id: 28,
      name: "Motorola Edge 40",
      price: "Rs 29,999",
      originalPrice: "Rs 34,999",
      discount: "14% OFF",
      rating: "4.5 (287 Reviews)",
      category: "Mobiles",
    },
    {
      id: 29,
      name: "Zebronics Zeb-Duke Bluetooth Speaker",
      price: "Rs 1,099",
      originalPrice: "Rs 1,799",
      discount: "39% OFF",
      rating: "3.8 (64 Reviews)",
      category: "Bluetooth Speakers",
    },
    {
      id: 30,
      name: "Mi 33W Power Adapter",
      price: "Rs 799",
      originalPrice: "Rs 1,299",
      discount: "38% OFF",
      rating: "4.2 (178 Reviews)",
      category: "Mobile Chargers",
    },
    {
      id: 31,
      name: "Wahl Super Close Shaver",
      price: "Rs 2,999",
      originalPrice: "Rs 3,999",
      discount: "25% OFF",
      rating: "4.6 (82 Reviews)",
      category: "Trimmers Shaver",
    },
    {
      id: 32,
      name: "Amazfit Bip U Pro",
      price: "Rs 3,499",
      originalPrice: "Rs 4,999",
      discount: "30% OFF",
      rating: "4.3 (194 Reviews)",
      category: "Smart Watches",
    },
    {
      id: 33,
      name: "Asus Vivobook 15",
      price: "Rs 42,990",
      originalPrice: "Rs 48,990",
      discount: "12% OFF",
      rating: "4.4 (107 Reviews)",
      category: "Laptops",
    },
    {
      id: 34,
      name: "Dyson Supersonic Hair Dryer",
      price: "Rs 28,999",
      originalPrice: "Rs 34,999",
      discount: "17% OFF",
      rating: "4.7 (56 Reviews)",
      category: "Hair Straightners Cutlers",
    },
    {
      id: 35,
      name: "Belkin Boost Charge USB-C Cable",
      price: "Rs 899",
      originalPrice: "Rs 1,299",
      discount: "31% OFF",
      rating: "4.5 (132 Reviews)",
      category: "Mobile Cables",
    },
    {
      id: 36,
      name: "Jabra Elite 3",
      price: "Rs 5,999",
      originalPrice: "Rs 7,999",
      discount: "25% OFF",
      rating: "4.6 (201 Reviews)",
      category: "Wireless Earbuds",
    },
    {
      id: 37,
      name: "Vivo V29 Pro",
      price: "Rs 39,999",
      originalPrice: "Rs 44,999",
      discount: "11% OFF",
      rating: "4.4 (176 Reviews)",
      category: "Mobiles",
    },
    {
      id: 38,
      name: "Tribit StormBox Micro",
      price: "Rs 3,999",
      originalPrice: "Rs 5,999",
      discount: "33% OFF",
      rating: "4.7 (89 Reviews)",
      category: "Bluetooth Speakers",
    },
    {
      id: 39,
      name: "Samsung 45W Super Fast Charger",
      price: "Rs 2,199",
      originalPrice: "Rs 3,499",
      discount: "37% OFF",
      rating: "4.8 (156 Reviews)",
      category: "Mobile Chargers",
    },
    {
      id: 40,
      name: "Braun Series 7 Shaver",
      price: "Rs 12,999",
      originalPrice: "Rs 15,999",
      discount: "19% OFF",
      rating: "4.9 (134 Reviews)",
      category: "Trimmers Shaver",
    },
    {
      id: 41,
      name: "Garmin Venu Sq",
      price: "Rs 18,999",
      originalPrice: "Rs 22,999",
      discount: "17% OFF",
      rating: "4.7 (98 Reviews)",
      category: "Smart Watches",
    },
    {
      id: 42,
      name: "Acer Aspire 5",
      price: "Rs 49,990",
      originalPrice: "Rs 56,990",
      discount: "12% OFF",
      rating: "4.3 (87 Reviews)",
      category: "Laptops",
    },
    {
      id: 43,
      name: "Dyson Corrale Hair Straightener",
      price: "Rs 39,999",
      originalPrice: "Rs 45,999",
      discount: "13% OFF",
      rating: "4.8 (42 Reviews)",
      category: "Hair Straightners Cutlers",
    },
    {
      id: 44,
      name: "Anker PowerLine III USB-C Cable",
      price: "Rs 1,199",
      originalPrice: "Rs 1,799",
      discount: "33% OFF",
      rating: "4.9 (201 Reviews)",
      category: "Mobile Cables",
    },
    {
      id: 45,
      name: "Sony WF-C500",
      price: "Rs 5,499",
      originalPrice: "Rs 6,999",
      discount: "21% OFF",
      rating: "4.5 (167 Reviews)",
      category: "Wireless Earbuds",
    },
    {
      id: 46,
      name: "Nothing Phone (2)",
      price: "Rs 44,999",
      originalPrice: "Rs 49,999",
      discount: "10% OFF",
      rating: "4.6 (342 Reviews)",
      category: "Mobiles",
    },
    {
      id: 47,
      name: "Marshall Emberton Bluetooth Speaker",
      price: "Rs 12,999",
      originalPrice: "Rs 15,999",
      discount: "19% OFF",
      rating: "4.8 (76 Reviews)",
      category: "Bluetooth Speakers",
    },
    {
      id: 48,
      name: "UGREEN 100W USB-C Charger",
      price: "Rs 3,499",
      originalPrice: "Rs 4,999",
      discount: "30% OFF",
      rating: "4.7 (112 Reviews)",
      category: "Mobile Chargers",
    },
    {
      id: 49,
      name: "Panasonic ER-GB80 Shaver",
      price: "Rs 6,999",
      originalPrice: "Rs 8,999",
      discount: "22% OFF",
      rating: "4.6 (89 Reviews)",
      category: "Trimmers Shaver",
    },
    {
      id: 50,
      name: "Apple Watch Series 8",
      price: "Rs 41,999",
      originalPrice: "Rs 45,999",
      discount: "9% OFF",
      rating: "4.9 (423 Reviews)",
      category: "Smart Watches",
    },
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">
        You Might Also Like
      </h2>

      {/* Category Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Recommended For You Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
        <h3 className="text-lg sm:text-xl font-semibold">
          Recommended For You
        </h3>
        <span className="text-sm text-gray-500">
          {filteredProducts.length} products
        </span>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="p-4">
                <div className="h-40 bg-gray-100 rounded-md mb-3 flex items-center justify-center">
                  {/* Product image placeholder */}
                  <span className="text-gray-400 text-sm sm:text-base">
                    Product Image
                  </span>
                </div>
                <h4 className="font-medium text-gray-800 mb-1 text-sm sm:text-base line-clamp-2">
                  {product.name}
                </h4>
                <div className="flex items-center mb-1">
                  <span className="text-orange-500 font-medium text-sm sm:text-base">
                    {product.rating} ★
                  </span>
                </div>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-base sm:text-lg font-bold text-gray-900">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-green-600 ml-auto">
                    {product.discount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found in this category</p>
        </div>
      )}
    </div>
  );
};

export default ProductRecommendations;
