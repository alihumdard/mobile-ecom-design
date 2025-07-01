import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [newQuestion, setNewQuestion] = useState("");

  const faqs = [
    {
      question: "Is this 5G",
      answer: "",
    },
    {
      question:
        "This phone is supposed to be 5G and NFC enabled with Android The specs here do not reflect Please",
      answer: "",
    },
    {
      question: "Is it 5g",
      answer: "",
    },
    {
      question: "This is 5g phone",
      answer: "",
    },
    {
      question: "This phone is 5g",
      answer: "",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      // Here you would typically add the question to your state or send to backend
      console.log("New question:", newQuestion);
      setNewQuestion("");
    }
  };

  return (
    <div className=" px-40 py-20 bg-white rounded-lg shadow-sm">
      <div className="space-y-3 border border-gray-200 rounded-lg p-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-3 last:border-b-0"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center py-2 focus:outline-none"
            >
              <span className="font-medium text-gray-800">
                Q. {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {activeIndex === index && (
              <div className="mt-2 text-gray-600 pb-2">
                {faq.answer || "No answer provided yet."}
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="mt-4 text-blue-500 hover:text-blue-700 focus:outline-none">
        Show More
      </button>

      <h2 className="text-xl font-semibold mb-4 mt-10">Ask a question</h2>

      <form onSubmit={handleSubmit} >
        <div className="relative">
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="What would you like to know?"
            className="w-full p-4 pl-5 pr-32 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm text-gray-700 placeholder-gray-400 transition-all duration-200"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200 shadow-md"
          >
            Ask Question
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 inline-block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FAQSection;
