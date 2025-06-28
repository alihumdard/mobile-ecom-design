import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-10 px-4 md:px-8 lg:px-16 xl:px-40">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex">
          <h1 className="text-2xl font-bold text-white mb-8">
            Mobile Ecommerce
          </h1>
          <h1 className="text-lg pl-48 text-white mb-8">Customer Services</h1>
          <h1 className="text-lg pl-[22%] text-white mb-8">
            Secure Payments Method
          </h1>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white text-sm">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-sm">
                  PAGs
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-sm">
                  Press & Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-sm">
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}

          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-sm">
                  Installments Plan
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-sm">
                  E-Warranty Activation
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-sm">
                  Sell on Pricesye
                </a>
              </li>
            </ul>
          </div>

          {/* Empty column to maintain layout */}
          <div>
            <img src="/images/payment_method.svg" className="w-[75%]" alt="" />
            <img
              src="/images/google-store-badge.webp"
              className="w-[40%] h-24 pt-10"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-white text-center md:text-left px-4 py-4 border-t ">
          {/* Copyright */}
          <p>Copyright © 2025 Pricesye.pk</p>

          {/* Social Media Icons */}
          <div className="flex space-x-3 mt-2 md:mt-0">
            <a
              href="#"
              className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
            >
              <Facebook size={18} className="text-primary" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-100 rounded-full hover:bg-sky-100 hover:text-sky-500 transition-all duration-300"
            >
              <Twitter size={18} className="text-primary" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-100 rounded-full hover:bg-pink-100 hover:text-pink-500 transition-all duration-300"
            >
              <Instagram size={18} className="text-primary" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-100 rounded-full hover:bg-red-100 hover:text-red-600 transition-all duration-300"
            >
              <Youtube size={18} className="text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
