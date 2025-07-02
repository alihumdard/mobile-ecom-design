import React from "react";

const TopMenu = () => {
  return (
    <div className="bg-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 py-3 shadow-sm">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-1 flex flex-wrap items-center gap-1">
        <a href="#" className="hover:text-blue-600 transition-colors">
          Mobiles
        </a>
        <span>/</span>
        <a href="#" className="hover:text-blue-600 transition-colors">
          ZTE
        </a>
        <span>/</span>
        <a href="#" className="">ZTE Nubia Focus 5G</a>
      </nav>

      {/* Page Title */}
      <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
        Buy ZTE Nubia Focus 5G Price in Pakistan
      </h1>
    </div>
  );
};

export default TopMenu;
