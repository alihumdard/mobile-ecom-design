import React from "react";

const SpecificationTable = () => {
  return (
    <>
      {/* Specification Grid */}
      <div className="bg-[#f4f6f9] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        {/* General Features */}
        <SpecCard title="General Features">
          <SpecRow label="Release Date" value="11 Aug 2024" />
          <SpecRow label="SIM Support" value="Dual Sim" />
          <SpecRow label="Phone Dimensions" value="163.6 x 74.9 x 8.6 mm" />
          <SpecRow label="Phone Weight" value="205.5 g" />
          <SpecRow label="Operating System" value="Android 13" />
        </SpecCard>

        {/* Battery */}
        <SpecCard title="Battery">
          <SpecRow label="Type" value="5000 mAh" />
        </SpecCard>

        {/* Display */}
        <SpecCard title="Display">
          <SpecRow label="Screen Size" value="6.6 Inches" />
          <SpecRow label="Screen Resolution" value="1612 x 720 pixels" />
          <SpecRow label="Screen Type" value="IPS LCD" />
          <SpecRow label="Screen Protection" value="N/A" />
        </SpecCard>

        {/* Camera */}
        <SpecCard title="Camera">
          <SpecRow label="Front Camera" value="8 MP" />
          <SpecRow label="Front Flash Light" value="N/A" />
          <SpecRow label="Front Video Recording" value="Yes" />
          <SpecRow label="Back Flash Light" value="Yes" />
          <SpecRow label="Back Camera" value="108 MP + 2 MP" />
          <SpecRow label="Back Video Recording" value="Yes" />
        </SpecCard>

        {/* Memory */}
        <SpecCard title="Memory">
          <SpecRow label="Internal Memory" value="256 GB" />
          <SpecRow label="RAM" value="8GB RAM" />
          <SpecRow label="Card Slot" value="No" />
        </SpecCard>

        {/* Connectivity */}
        <SpecCard title="Connectivity">
          <SpecRow label="Bluetooth" value="Yes" />
          <SpecRow label="3G" value="Yes" />
          <SpecRow label="4G/LTE" value="Yes" />
          <SpecRow label="5G" value="No" />
          <SpecRow label="Radio" value="N/A" />
          <SpecRow label="WiFi" value="Yes" />
          <SpecRow label="NFC" value="N/A" />
        </SpecCard>

        {/* Performance */}
        <SpecCard title="Performance">
          <SpecRow label="Processor" value="Unisoc T760" />
          <SpecRow label="GPU" value="Mali-G57" />
        </SpecCard>
      </div>

      {/* Highlights Heading */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 bg-slate-100 pb-6 font-semibold text-lg">
        <h1>Highlights</h1>
      </div>

      {/* Highlight Images */}
      <div className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
        {["detail13.png", "detail14.png", "detail15.png", "detail16.png"].map(
          (img, idx) => (
            <img
              key={idx}
              src={`/images/${img}`}
              alt={`Highlight ${idx + 1}`}
              className="w-full max-w-4xl h-auto py-6"
            />
          )
        )}
        <img
          src="/images/detail17.jpg"
          alt="Final Highlight"
          className="w-full max-w-4xl h-auto pb-28"
        />
      </div>
    </>
  );
};

// Reusable Card Wrapper
const SpecCard = ({ title, children }) => (
  <div className="bg-white rounded-md p-4 shadow-sm">
    <h2 className="font-semibold text-gray-800 mb-3">{title}</h2>
    <div className="space-y-1">{children}</div>
  </div>
);

// Reusable Row
const SpecRow = ({ label, value }) => (
  <div className="flex justify-between border-b border-gray-100 py-1 text-gray-700">
    <span>{label}</span>
    <span className="font-medium text-right">{value}</span>
  </div>
);

export default SpecificationTable;
