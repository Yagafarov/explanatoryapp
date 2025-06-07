import React from "react";
import { Volume2 } from "lucide-react"; // npm i lucide-react

const WordCard = ({ word, translation, image, note, definition }) => {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ru-RU";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="relative bg-gradient-to-br from-white via-neutral-50 to-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 ease-in-out overflow-hidden">
      <div className="w-full h-52 bg-white flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={word}
          onError={(e) => {
            e.target.onerror = null; // prevent infinite loop if placeholder also fails
            e.target.src = `https://placehold.co/120x80?text=${encodeURIComponent(word)}`;
          }}
          className="object-contain h-full max-w-full"
        />
      </div>

      <div className="p-6 space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{word}</h2>
          <button
            onClick={speak}
            aria-label="Listen to pronunciation"
            className="bg-primary text-indigo-600 hover:bg-indigo-600 hover:text-white p-2 rounded-full shadow-md transition hover:scale-105"
          >
            <Volume2 className="w-5 h-5" />
          </button>
        </div>

        <p className="text-lg text-indigo-600 font-medium">{translation}</p>

        {definition && (
          <p className="text-sm text-gray-700 leading-snug">{definition}</p>
        )}

        {note && (
          <p className="text-xs text-gray-500 italic border-l-4 border-gray-300 pl-3">
            {note}
          </p>
        )}
      </div>
    </div>
  );
};

export default WordCard;
