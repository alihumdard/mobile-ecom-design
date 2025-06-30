import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const productImages = {
    1: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=60",
    2: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=60",
    3: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=60",
    4: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=500&q=60",
    5: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=60"
  };

  const reviews = [
    {
      id: 1,
      name: "Muhammad Avsi",
      stars: "★★★★★",
      date: "16 June 2025",
      text: "The product quality exceeded my expectations. Everything is excellent from packaging to performance.",
      verified: true,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      productId: 1,
      productName: "Wireless Headphones Pro"
    },
    {
      id: 2,
      name: "Rana Bauf",
      stars: "★★★★",
      date: "26 June 2025",
      text: "Very satisfied with the service and product quality. Works perfectly as described.",
      verified: true,
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      productId: 2,
      productName: "Smart Watch Series 5"
    },
    {
      id: 3,
      name: "Syed Qasim",
      stars: "★★★★★",
      date: "26 June 2025",
      text: "That's why I trusted in your services. The camera quality is amazing, will order again!",
      verified: true,
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      productId: 3,
      productName: "DSLR Camera Kit"
    },
    {
      id: 4,
      name: "Ayesha Khan",
      stars: "★★★★★",
      date: "15 June 2025",
      text: "Fast delivery and excellent packaging. The shoes are very comfortable and stylish.",
      verified: true,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      productId: 4,
      productName: "Running Shoes"
    },
    {
      id: 5,
      name: "Ali Raza",
      stars: "★★★★",
      date: "10 June 2025",
      text: "Good product at reasonable price. The jacket fits perfectly and keeps me warm.",
      verified: true,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      productId: 5,
      productName: "Winter Jacket"
    }
  ];

  const openPopup = (review) => {
    setSelectedReview(review);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedReview(null);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-16 relative">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Customer Reviews</h1>
        <p className="text-lg md:text-xl text-gray-600">What our customers say about Pricroye.pk</p>
      </div>

      <div className="relative group">
        {/* Navigation Buttons */}
        <button
          ref={navigationPrevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-md flex items-center justify-center text-indigo-600 hover:bg-indigo-100 transition-all opacity-0 group-hover:opacity-100 -translate-x-6 group-hover:translate-x-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          ref={navigationNextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-md flex items-center justify-center text-indigo-600 hover:bg-indigo-100 transition-all opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          className="px-1 sm:px-2"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div
                className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-all flex flex-col cursor-pointer"
                onClick={() => openPopup(review)}
              >
                <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                  <img
                    src={productImages[review.productId]}
                    alt={review.productName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white shadow mr-3"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{review.name}</h3>
                      <div className="text-yellow-400 flex items-center">
                        {review.stars}
                        <span className="text-xs text-gray-500 ml-2">({review.stars.length}/5)</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm md:text-base flex-grow">"{review.text}"</p>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{review.date}</span>
                    <span className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                      Read full review
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Popup */}
      {showPopup && selectedReview && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4"
          onClick={closePopup}
        >
          <div
            className="bg-white rounded-xl w-full max-w-4xl mx-auto overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-56 md:h-64 overflow-hidden relative">
              <img
                src={productImages[selectedReview.productId]}
                alt={selectedReview.productName}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-3 text-lg font-semibold">
                {selectedReview.productName}
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start mb-4">
                <img
                  src={selectedReview.image}
                  alt={selectedReview.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white shadow mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{selectedReview.name}</h3>
                  <div className="text-yellow-400 text-sm mt-1">
                    {selectedReview.stars} <span className="ml-2 text-xs text-gray-500">({selectedReview.stars.length}/5)</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{selectedReview.date}</div>
                </div>
              </div>

              <p className="text-gray-700 text-base md:text-lg mb-6">"{selectedReview.text}"</p>

              {selectedReview.verified && (
                <div className="flex items-center bg-green-50 px-4 py-2 rounded">
                  <svg className="h-5 w-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0L4.293 9.707a1 1 0 011.414-1.414L8 10.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-700 font-medium text-sm">Verified Purchase</span>
                </div>
              )}
            </div>

            <button
              className="absolute top-3 right-3 text-white bg-black/60 hover:bg-black/80 p-2 rounded-full"
              onClick={closePopup}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
