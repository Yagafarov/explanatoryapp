import React from "react";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="So'z yoki tarjimani qidiring..."
        className="w-full p-4 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-primary/30 text-lg shadow-sm"
      />
      <div className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-xl">🔍</div>
    </div>
  );
};

export default SearchBar;
