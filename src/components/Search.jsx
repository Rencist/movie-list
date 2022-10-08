import React, { useState } from 'react';
import { useGlobalContext } from '../Context';

const Search = () => {
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-slate-300 pt-4 px-4 text-center 2xl:text-xl">
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={handleChange}
          type="text"
          placeholder="type your favorite movie"
          className="px-2 py-1 mr-2 text-black bg-slate-200 rounded-lg border border-slate-500 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          className="py-1 px-5 mr-2 mb-2 text-sm font-medium text-slate-700 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 bg-slate-400 focus:ring-gray-200"
        >
          search
        </button>
        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
          surprise me!
        </button>
      </form>
    </div>
  );
};

export default Search;
