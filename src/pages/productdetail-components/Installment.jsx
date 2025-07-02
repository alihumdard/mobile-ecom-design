import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const banks = [
  {
    id: "alfalah",
    name: "Bank Alfalah",
    image: "/images/bank1.webp",
    data: [
      { months: "3 Months", price: "Rs 11,824" },
      { months: "6 Months", price: "Rs 6,072" },
      { months: "9 Months", price: "Rs 4,160" },
      { months: "12 Months", price: "Rs 3,191" },
      { months: "18 Months", price: "Rs 2,496" },
      { months: "24 Months", price: "Rs 2,029" },
      { months: "36 Months", price: "Rs 1,562" },
    ],
  },
  {
    id: "faysal",
    name: "Faysal Bank",
    image: "/images/bank2.webp",
    data: [
      { months: "3 Months", price: "Rs 11,824" },
      { months: "6 Months", price: "Rs 6,072" },
      { months: "9 Months", price: "Rs 4,160" },
      { months: "12 Months", price: "Rs 3,191" },
      { months: "18 Months", price: "Rs 2,496" },
    ],
  },
  {
    id: "hbl",
    name: "HBL",
    image: "/images/bank3.webp",
    data: [
      { months: "3 Months", price: "Rs 11,824" },
      { months: "6 Months", price: "Rs 6,072" },
      { months: "9 Months", price: "Rs 4,160" },
      { months: "12 Months", price: "Rs 3,191" },
      { months: "18 Months", price: "Rs 2,496" },
    ],
  },
  {
    id: "js",
    name: "JS Bank",
    image: "/images/bank4.webp",
    data: [
      { months: "3 Months", price: "Rs 11,824" },
      { months: "6 Months", price: "Rs 6,072" },
      { months: "9 Months", price: "Rs 4,160" },
      { months: "12 Months", price: "Rs 3,191" },
      { months: "18 Months", price: "Rs 2,496" },
    ],
  },
  {
    id: "mcb",
    name: "MCB",
    image: "/images/bank5.webp",
    data: [
      { months: "3 Months", price: "Rs 11,824" },
      { months: "6 Months", price: "Rs 6,072" },
      { months: "9 Months", price: "Rs 4,160" },
      { months: "12 Months", price: "Rs 3,191" },
      { months: "18 Months", price: "Rs 2,496" },
    ],
  },
  {
    id: "ubl",
    name: "UBL",
    image: "/images/bank6.webp",
    data: [
      { months: "3 Months", price: "Rs 11,824" },
      { months: "6 Months", price: "Rs 6,072" },
      { months: "9 Months", price: "Rs 4,160" },
      { months: "12 Months", price: "Rs 3,191" },
      { months: "18 Months", price: "Rs 2,496" },
    ],
  },
];

const products = [
  {
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=60",
    title: "Wireless Headphones Pro",
    rating: 4.8,
    reviews: 21,
    price: 8999,
    oldPrice: 10999,
    discount: "18% OFF",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=60",
    title: "Smart Watch Series 5",
    rating: 4.7,
    reviews: 18,
    price: 10499,
    oldPrice: 12999,
    discount: "19% OFF",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=60",
    title: "Bluetooth Speaker Mini",
    rating: 4.5,
    reviews: 10,
    price: 3499,
    oldPrice: 4999,
    discount: "30% OFF",
  },
  {
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=60",
    title: "Wireless Headphones Pro",
    rating: 4.8,
    reviews: 21,
    price: 8999,
    oldPrice: 10999,
    discount: "18% OFF",
  },
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

const Installment = () => {
  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const renderDropdown = (bank) => {
    const isOpen = openId === bank.id;
    return (
      <div key={bank.id}>
        <div
          onClick={() => toggleOpen(bank.id)}
          className="mt-6 flex justify-between items-center border rounded-md px-4 py-3 bg-white cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <img src={bank.image} alt={bank.name} className="w-6 h-6" />
            <span className="font-medium text-gray-800">{bank.name}</span>
          </div>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {isOpen && (
          <div className="mt-4">
            <div className="overflow-hidden border rounded-md">
              <div className="grid grid-cols-2 bg-gray-100 px-4 py-2 font-medium text-sm text-gray-700">
                <div>EMI</div>
                <div>Monthly Installment</div>
              </div>
              {bank.data.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-2 px-4 py-2 text-sm ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <div>{item.months}</div>
                  <div>{item.price}</div>
                </div>
              ))}
            </div>

            <ul className="mt-4 text-xs text-gray-700 space-y-1 list-decimal list-inside">
              <li>One Time Bank Fee: Flat 2.50% or Rs.1,000 and FED charged.</li>
              <li>Processing Fee: 2.5% will be charged.</li>
              <li>Name and CNIC must be of the cardholder.</li>
              <li>SBS Plan as per assigned credit limit.</li>
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div>
        <h1 className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40 py-10 text-lg bg-slate-100">
          Installment Plans
        </h1>

        <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40 pt-6 pb-2">
          <p className="text-xs text-gray-600 mb-7">
            *Only Credit Card holders are eligible for installment plan
          </p>

          {banks.map((bank) => renderDropdown(bank))}
        </div>
      </div>

      <div className="bg-slate-100 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40 py-8 mt-5 flex flex-col sm:flex-row justify-between gap-4 items-center">
        <h1 className="text-lg font-semibold">Upgrade to Premium</h1>
        <button className="px-6 py-3 bg-primary text-white rounded-md text-sm">
          Compare
        </button>
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40 py-6 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-md shadow hover:shadow-lg transition-all relative cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-3"
              />
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                {product.title}
              </h3>
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

      <h1 className="text-lg font-semibold bg-slate-100 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40 py-8 mt-5">
        Shop By Brand
      </h1>

      <div className="py-10 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40">
        <div className="flex flex-wrap justify-center gap-4 cursor-pointer">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`${brand.bg} w-[100px] h-[100px] flex items-center justify-center rounded-lg shadow-md`}
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
    </>
  );
};

export default Installment;
