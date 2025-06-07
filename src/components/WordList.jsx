import React from "react";
import WordCard from "./WordCard";

const WordList = ({ words }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {words.map((item, index) => (
        <WordCard key={index}  {...item}/>
      ))}
    </div>
  );
};

export default WordList;
