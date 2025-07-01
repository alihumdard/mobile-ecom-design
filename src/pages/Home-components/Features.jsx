import React from 'react'

const Features = () => {
      const features = [
    {
      img: "/images/pta.svg",
      title: "PTA Approved",
      subtitle: "Mobile Phone",
    },
    {
      img: "/images/pta2.svg",
      title: "1 Year",
      subtitle: "Brand Warranty",
    },
    {
      img: "/images/pta3.svg",
      title: "Packaging Video",
      subtitle: "See Your Product",
    },
    {
      img: "/images/pta4.svg",
      title: "Fast Delivery",
      subtitle: "All Over Pakistan",
    },
  ];
  return (
    <div>
          {/* Feature Info Cards */}
      <div className="flex flex-wrap justify-center gap-44 px-4 md:px-10 lg:px-40 bg-white py-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-[150px]"
          >
            <div className="w-20 h-20 mb-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-base font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
