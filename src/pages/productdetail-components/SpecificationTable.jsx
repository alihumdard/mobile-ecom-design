import React from "react";

const SpecificationTable = () => {
  return (
    <>
      <div className="bg-[#f4f6f9] pl-40 pr-80 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        {/* General Features */}
        <div className="bg-white rounded-md p-4 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-3">General Features</h2>
          <div className="space-y-1">
            <SpecRow label="Release Date" value="11 Aug 2024" />
            <SpecRow label="SIM Support" value="Dual Sim" />
            <SpecRow label="Phone Dimensions" value="163.6 x 74.9 x 8.6 mm" />
            <SpecRow label="Phone Weight" value="205.5 g" />
            <SpecRow label="Operating System" value="Android 13" />
          </div>
        </div>

        {/* Battery */}
        <div className="bg-white rounded-md p-4 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-3">Battery</h2>
          <SpecRow label="Type" value="5000 mAh" />
        </div>

        {/* Display */}
        <div className="bg-white rounded-md p-4 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-3">Display</h2>
          <div className="space-y-1">
            <SpecRow label="Screen Size" value="6.6 Inches" />
            <SpecRow label="Screen Resolution" value="1612 x 720 pixels" />
            <SpecRow label="Screen Type" value="IPS LCD" />
            <SpecRow label="Screen Protection" value="N/A" />
          </div>
        </div>

        {/* Camera */}
        <div className="bg-white rounded-md p-4 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-3">Camera</h2>
          <div className="space-y-1">
            <SpecRow label="Front Camera" value="8 MP" />
            <SpecRow label="Front Flash Light" value="N/A" />
            <SpecRow label="Front Video Recording" value="Yes" />
            <SpecRow label="Back Flash Light" value="Yes" />
            <SpecRow label="Back Camera" value="108 MP + 2 MP" />
            <SpecRow label="Back Video Recording" value="Yes" />
          </div>
        </div>

        {/* Memory */}
        <div className="bg-white rounded-md p-4 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-3">Memory</h2>
          <div className="space-y-1">
            <SpecRow label="Internal Memory" value="256 GB" />
            <SpecRow label="RAM" value="8GB RAM" />
            <SpecRow label="Card Slot" value="No" />
          </div>
        </div>

        {/* Connectivity */}
        <div className="bg-white rounded-md p-4 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-3">Connectivity</h2>
          <div className="space-y-1">
            <SpecRow label="Bluetooth" value="Yes" />
            <SpecRow label="3G" value="Yes" />
            <SpecRow label="4G/LTE" value="Yes" />
            <SpecRow label="5G" value="No" />
            <SpecRow label="Radio" value="N/A" />
            <SpecRow label="WiFi" value="Yes" />
            <SpecRow label="NFC" value="N/A" />
          </div>
        </div>

        {/* Performance */}
        <div className="bg-white rounded-md p-4 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-3">Performance</h2>
          <div className="space-y-1">
            <SpecRow label="Processor" value="Unisoc T760" />
            <SpecRow label="GPU" value="Mali-G57" />
          </div>
        </div>
      </div>
      <div className="px-40 bg-slate-100 pb-10 font-semibold">
        <h1>Highlights</h1>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img
          src="/images/detail13.png"
          alt="Centered Image"
          className="w-auto h-auto py-10"
        />
        <img
          src="/images/detail14.png"
          alt="Centered Image"
          className="w-auto h-auto py-10"
        />
        <img
          src="/images/detail15.png"
          alt="Centered Image"
          className="w-auto h-auto py-10"
        />
        <img
          src="/images/detail16.png"
          alt="Centered Image"
          className="w-auto h-auto py-10"
        />
        <img src="/images/detail17.jpg" className="pb-28" alt="" />
      </div>
    </>
  );
};

const SpecRow = ({ label, value }) => (
  <div className="flex justify-between border-b border-gray-100 py-1 text-gray-700">
    <span>{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default SpecificationTable;
