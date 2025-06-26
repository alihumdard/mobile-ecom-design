import React from "react";
import { FaTimes, FaTruck, FaExclamationCircle } from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-80 z-50 transform transition-transform duration-300 shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Sidebar Container */}
      <div className="bg-white h-full flex flex-col">
        {/* Header with Background */}
        <div className="bg-primary text-white px-6 py-6 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-xl hover:text-red-300 transition"
          >
            <FaTimes />
          </button>

          {/* Logo and Description */}
          <h2 className="text-2xl font-bold mt-10">Mobile Ecommerce</h2>
          <p className="text-sm text-white/80 mt-1">
            Explore products & features
          </p>

          {/* Log In Button */}
          <div className="pt-3">
            <button className="w-1/2 bg-white text-primary font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-100 transition">
              Log In
            </button>
          </div>
         <div className="space-y-4 py-4">
  {/* Tracking Order */}
  <div className="flex items-center gap-3 text-white cursor-pointer transition-all duration-200 hover:translate-x-1 ">
    <FaTruck className="text-lg transition-transform duration-200 group-hover:translate-x-1" />
    <p className="text-sm font-medium">Tracking my order</p>
  </div>

  {/* Launch Complaint */}
  <div className="flex items-center gap-3 text-white cursor-pointer transition-all duration-200 hover:translate-x-1">
    <FaExclamationCircle className="text-lg transition-transform duration-200 group-hover:translate-x-1" />
    <p className="text-sm font-medium">Launch a Complaint</p>
  </div>
</div>

        </div>

        {/* Extra Content (Optional space) */}
        <div className="p-6">
          <p className="text-sm text-gray-500">
            Start shopping or create an account to explore more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
