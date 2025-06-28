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

  // Sample product images (replace with your actual product images)
  const productImages = {
    1: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    2: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    3: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    4: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    5: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
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
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Customer Reviews</h1>
        <p className="text-xl text-gray-600">What our customers say about Pricroye.pk</p>
      </div>

      <div className="relative group">
        {/* Custom Navigation Buttons */}
        <button
          ref={navigationPrevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-indigo-600 hover:bg-indigo-100 transition-all duration-300 transform -translate-x-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          ref={navigationNextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-indigo-600 hover:bg-indigo-100 transition-all duration-300 transform translate-x-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          className="py-4 px-2"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div 
                className="h-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col group overflow-hidden"
                onClick={() => openPopup(review)}
              >
                {/* Product Image */}
                <div className="h-40 overflow-hidden">
                  <img 
                    src={productImages[review.productId]} 
                    alt={review.productName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      <img 
                        src={review.image} 
                        alt={review.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      {review.verified && (
                        <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg text-gray-800">{review.name}</h3>
                      {review.stars && <div className="text-yellow-400 flex items-center">
                        {review.stars}
                        <span className="text-xs text-gray-500 ml-2">({review.stars.length}/5)</span>
                      </div>}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">"{review.text}"</p>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{review.date}</span>
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                      Read full review
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Enhanced Popup with Product Image */}
      {showPopup && selectedReview && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={closePopup}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full mx-4 overflow-hidden shadow-2xl transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Product Image Section */}
            <div className="h-64 overflow-hidden relative">
              <img 
                src={productImages[selectedReview.productId]} 
                alt={selectedReview.productName}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-xl font-bold text-white">{selectedReview.productName}</h3>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-start">
                <img 
                  src={selectedReview.image} 
                  alt={selectedReview.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{selectedReview.name}</h3>
                  {selectedReview.stars && <div className="text-yellow-400 text-lg mt-1 flex items-center">
                    {selectedReview.stars}
                    <span className="text-sm text-gray-500 ml-2">({selectedReview.stars.length}/5)</span>
                  </div>}
                  <div className="text-gray-500 text-sm mt-1">{selectedReview.date}</div>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-gray-700 text-lg mb-6">"{selectedReview.text}"</div>
                
                {selectedReview.verified && (
                  <div className="flex items-center bg-green-50 px-4 py-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-green-800 font-medium">Verified Purchase</span>
                  </div>
                )}
              </div>
            </div>
            
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors bg-black bg-opacity-50 rounded-full p-2"
              onClick={closePopup}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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