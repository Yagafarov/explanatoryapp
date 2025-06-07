import React from "react";
import { Search, Filter, ChevronDown, X } from "lucide-react";

const SearchBar = ({ query, setQuery, langFilter, setLangFilter }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Поле поиска с кнопкой очистки */}
        <div className="relative flex-1">
          <div className="absolute top-1/2 left-4 -translate-y-1/2 text-indigo-600">
            <Search size={20} />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ищите слово или перевод..."
            className="w-full p-4 pl-12 pr-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 text-lg shadow-sm transition-all duration-300 hover:shadow-md"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
              aria-label="Очистить поиск"
            >
              <X size={20} />
            </button>
          )}
        </div>
        
        {/* Улучшенный фильтр языков */}
        <div className="relative">
          <div className="flex items-center h-full bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300 min-w-[180px]">
            <Filter size={20} className="text-indigo-600 mr-2" />
            <select
              value={langFilter}
              onChange={(e) => setLangFilter(e.target.value)}
              className="bg-transparent text-gray-800 font-medium focus:outline-none cursor-pointer w-full py-2 appearance-none"
            >
              <option value="">Все языки</option>
              <option value="ru">Русский</option>
              <option value="uz">Узбекский</option>
            </select>
            <ChevronDown size={16} className="text-indigo-600 ml-1" />
          </div>
        </div>
      </div>
      
      {/* Быстрые вкладки фильтрации */}
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {[
          { id: '', label: 'Все' },
          { id: 'uz', label: "Узбекский", flag: '🇺🇿' },
          { id: 'ru', label: 'Русский', flag: '🇷🇺' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setLangFilter(item.id)}
            className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              langFilter === item.id
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {item.flag && <span className="mr-2 text-lg">{item.flag}</span>}
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
