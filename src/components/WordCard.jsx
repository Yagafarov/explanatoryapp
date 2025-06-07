import React from "react";
import { Volume2 } from "lucide-react"; // npm i lucide-react

const flags = {
  ru: "https://flagcdn.com/ru.svg", // Rossiya bayrog'i
  en: "https://flagcdn.com/us.svg", // Amerika bayrog'i
  uz: "https://flagcdn.com/uz.svg", // O'zbekiston bayrog'i
  // Qo'shimcha tillar va bayroqlarni qo'shishingiz mumkin
};

const WordCard = ({ word, translation, image, definition, lang }) => {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(definition);
    utterance.lang = lang; // Tilda talaffuz qilish
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="relative bg-gradient-to-br from-white via-neutral-50 to-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 ease-in-out overflow-hidden">
      <div className="w-full h-52 bg-white flex items-center justify-center overflow-hidden">
        <img
          src={image || flags[lang] || `https://placehold.co/600x400/fff/234`}
          alt={word}
          loading="eager"
          onError={(e) => {
            e.target.onerror = null; // prevent infinite loop if placeholder also fails
            // Bayroqni ko'rsatish
            e.target.src = flags[lang] || `https://placehold.co/600x400/fff/234`;
          }}
          className="object-contain h-full max-w-full"
        />
      </div>

      <div className="p-6 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {lang && flags[lang] && (
              <img
                src={flags[lang]}
                alt={`${lang} flag`}
                className="w-6 h-6 mr-2"
              />
            )}
            <h2 className="text-2xl font-bold text-gray-900">{word}</h2>
          </div>
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
      </div>
    </div>
  );
};

export default WordCard;
