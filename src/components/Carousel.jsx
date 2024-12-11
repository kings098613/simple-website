import React, { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of cards with unique images and titles
  const cards = [
    {
      id: 1,
      text: "Student",
      image: "https://via.placeholder.com/300x200?text=Student",
    },
    {
      id: 2,
      text: "Card",
      image: "https://via.placeholder.com/300x200?text=Card",
    },
    {
      id: 3,
      text: "Siwes",
      image: "https://via.placeholder.com/300x200?text=Siwes",
    },
  ];

  // Function to handle the "Next" button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Cards Container */}
      <div className="flex justify-evenly w-full max-w-4xl">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`flex flex-col items-center p-4 border rounded-lg shadow-md w-1/4 transition-transform duration-500 ease-in-out ${
              index === currentIndex
                ? "scale-100 opacity-100"
                : "scale-90 opacity-50"
            }`}
          >
            <img
              src={card.image}
              alt={card.text}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <p className="text-lg font-semibold">{card.text}</p>
            <input
              type="radio"
              name="carousel"
              checked={index === currentIndex}
              readOnly
              className="mt-2"
            />
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
