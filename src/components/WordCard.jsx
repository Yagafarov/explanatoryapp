import React from "react";

const WordCard = ({ word, translation, image, note, definition }) => {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ru-RU";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition duration-300 overflow-hidden">
      <img src={image} alt={word} className="w-full h-48 object-cover rounded-t-3xl" />
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-semibold text-gray-800">{word}</h2>
          <button
            onClick={speak}
            className="bg-primary text-white px-3 py-1 rounded-full hover:bg-indigo-600 shadow"
          >
            🔊</button>
        </div>
        <p className="text-lg text-accent font-medium mb-2">{translation}</p>
        {definition && <p className="text-sm text-gray-700 mb-1">{definition}</p>}
        {note && <p className="text-xs text-gray-500 italic">{note}</p>}
      </div>
    </div>
  );
};

export default WordCard;