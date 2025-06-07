// src/components/WordCard.js
import React from "react";

const WordCard = ({ word, translation, image, note, definition }) => {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ru-RU"; // Ruscha so'z uchun
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-300">
      <img src={image} alt={word} className="w-full h-40 object-cover rounded-xl mb-3" />
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-bold text-gray-800">{word}</h2>
        <button
          onClick={speak}
          className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600"
        >
          🔊
        </button>
      </div>
      <p className="text-md text-green-600 font-medium">{translation}</p>
      {definition && <p className="text-sm text-gray-700 mt-2">{definition}</p>}
      {note && <p className="text-sm text-gray-500 italic mt-1">{note}</p>}
    </div>
  );
};

export default WordCard;
