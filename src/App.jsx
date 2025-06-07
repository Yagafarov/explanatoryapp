// src/App.js
import React, { useState } from 'react';
import dictionary from '../src/data/dictionary';
import WordList from '../src/components/WordList';
import SearchBar from '../src/components/SearchBar';

const App = () => {
  const [query, setQuery] = useState("");

  const filteredWords = dictionary.filter((item) =>
    item.word.toLowerCase().includes(query.toLowerCase()) ||
    item.translation.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-green-100 p-6">
      <h1 className="text-5xl font-extrabold text-center text-primary drop-shadow-sm mb-8">
        Ruscha-O'zbekcha Lug'at
      </h1>
      <div className="max-w-3xl mx-auto">
        <SearchBar query={query} setQuery={setQuery} />
        <WordList words={filteredWords} />
      </div>
    </div>
  );
};

export default App;

