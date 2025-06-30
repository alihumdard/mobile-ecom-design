import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { AlignLeft } from "lucide-react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="bg-primary text-white px-2 py-3 shadow-md w-full top-0 z-50">
        <div className="mx-4 flex flex-wrap items-center justify-between gap-4">
          {/* Left Section: Logo + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-white text-2xl"
            >
              <AlignLeft size={28} />
            </button>
            <h1 className="text-xl font-bold">Mobile Ecommerce</h1>
          </div>

          {/* Center Search Bar (Always Visible) */}
          <div className="flex-1 max-w-md w-full relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 pr-10 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FaMicrophone
              className="absolute right-3 top-1/2 -translate-y-1/2 text-primary cursor-pointer"
              size={18}
            />
          </div>

          {/* Right Buttons (Hide on small screens) */}
          <div className="hidden sm:flex items-center gap-4">
            <button className="bg-white text-primary text-sm px-5 py-2 rounded border border-transparent hover:bg-primary hover:text-white hover:border-white transition duration-200">
              Log in
            </button>

            <button className="bg-primary text-white text-sm px-5 py-2 rounded border border-white hover:bg-white hover:text-primary hover:border-white transition duration-200">
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
