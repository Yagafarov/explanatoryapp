import React from "react";
import WordCard from "./WordCard";

const WordList = ({ words }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {words.map((item, index) => (
        <WordCard key={index} {...item} />
      ))}
    </div>
  );
};

export default WordList;