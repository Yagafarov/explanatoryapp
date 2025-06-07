// src/App.js
import React, { useState } from 'react';
import dictionary from '../src/data/dictionary';
import WordList from '../src/components/WordList';
import SearchBar from '../src/components/SearchBar';

const App = () => {
  const [query, setQuery] = useState("");

  const filteredWords = dictionary.filter((item) =>
    item.word.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
        Ruscha-O'zbekcha Lug'at
      </h1>
      <div className="max-w-2xl mx-auto">
        <SearchBar query={query} setQuery={setQuery} />
        <WordList words={filteredWords} />
      </div>
    </div>
  );
};

export default App;
