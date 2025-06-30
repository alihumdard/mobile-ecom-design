import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-40 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Titles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-center sm:text-left">
          <h1 className="text-2xl font-bold">Mobile Ecommerce</h1>
          <h2 className="text-lg font-semibold">Customer Services</h2>
          <h2 className="text-lg font-semibold">Secure Payments Method</h2>
        </div>

        {/* Footer Links and Payment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Column 1 */}
          <ul className="space-y-2">
            {["About us", "PAGs", "Contact Us", "Careers", "Press & Blog", "Terms & Condition"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="text-white text-sm hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Column 2 */}
          <ul className="space-y-2">
            {["Help Center", "Privacy Policy", "Installments Plan", "E-Warranty Activation", "Sell on Pricesye"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="text-white text-sm hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Column 3: Payment and Playstore */}
          <div className="flex flex-col items-start">
            <img
              src="/images/payment_method.svg"
              alt="Payment Methods"
              className="w-3/4 mb-4"
            />
            <img
              src="/images/google-store-badge.webp"
              alt="Google Play"
              className="w-1/2 h-20 object-contain"
            />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-6 text-sm">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            © 2025 Pricesye.pk. All rights reserved.
          </p>

          <div className="flex gap-3">
            <a href="#" className="p-2 bg-white rounded-full hover:bg-blue-100 transition">
              <Facebook size={18} className="text-primary" />
            </a>
            <a href="#" className="p-2 bg-white rounded-full hover:bg-sky-100 transition">
              <Twitter size={18} className="text-primary" />
            </a>
            <a href="#" className="p-2 bg-white rounded-full hover:bg-pink-100 transition">
              <Instagram size={18} className="text-primary" />
            </a>
            <a href="#" className="p-2 bg-white rounded-full hover:bg-red-100 transition">
              <Youtube size={18} className="text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
