import React from "react";
import { Volume2 } from "lucide-react"; // npm i lucide-react

const flags = {
    ru: "https://flagcdn.com/ru.svg", // Rossiya bayrog'i
    en: "https://flagcdn.com/us.svg", // Amerika bayrog'i
    uz: "https://flagcdn.com/uz.svg", // O'zbekiston bayrog'i
    // Qo'shimcha tillar va bayroqlarni qo'shishingiz mumkin
};

const WordCard = ({ id, word, translation, image, definition, lang }) => {
    const speak = () => {
        const utterance = new SpeechSynthesisUtterance(
            lang === 'uz' ? `${translation} — это ${definition}` : word
        );
        utterance.lang = lang; // Tilda talaffuz qilish
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="relative bg-gradient-to-br from-white via-neutral-50 to-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 ease-in-out overflow-hidden">
            <div className="absolute top-4 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-l-lg shadow-md z-10">
                {lang.toUpperCase()}
            </div>
            <div className="absolute top-11 right-0 bg-indigo-600/50 text-white text-xs font-bold px-3 py-1 rounded-l-lg shadow-md z-10">
                #{id}
            </div>
            <div className="relative w-full h-56 bg-gradient-to-r from-indigo-50 to-blue-50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent z-10"></div>
                <img
                    src={image || flags[lang] || `https://placehold.co/600x400/f0f4ff/6178F1?text=${word}`}
                    alt={word}
                    loading="eager"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = flags[lang] || `https://placehold.co/600x400/f0f4ff/6178F1?text=${word}`;
                    }}
                    className="object-contain h-4/5 max-w-[85%] rounded-lg shadow-sm z-0"
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
                        className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white p-2.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 ml-2"
                    >
                        <Volume2 className="w-5 h-5" />
                    </button>
                </div>

                <p className="text-lg text-indigo-600 font-medium">{translation}</p>

                {definition && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 rounded-lg p-3 border border-gray-100">
                {definition}
              </p>
            </div>
          )}
            </div>
        </div>
    );
};

export default WordCard;
