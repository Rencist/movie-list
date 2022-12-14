import React from 'react';
import { useGlobalContext } from '../Context';
import { BsHandThumbsUp } from 'react-icons/bs';

const Waifus = () => {
  const { waifus, loading, selectWaifu, addToFavorites } = useGlobalContext();

  if (loading) {
    return (
      <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
        <div className="flex items-center">
          <span className="text-3xl mr-4">Loading</span>
          <svg className="animate-spin h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </div>
    );
  }
  if (waifus.length < 1) {
    return (
      <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
        <h1 className="text-4xl mr-4 text-center">No waifu matched in your search term. Please try again.</h1>
      </div>
    );
  }

  return (
    <section className=" pt-12 pl-12 mt-auto grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 bg-slate-100 2xl:pl-48 2xl:pr-48">
      {waifus.map((singleWaifu) => {
        const { idMeal, strMeal: title, strMealThumb: image } = singleWaifu;
        return (
          <article key={idMeal} className=" pb-5 mb-5 m-3 bg-white max-w-xl rounded-lg bg-cover shadow-lg hover:bg-slate-50 hover:shadow-2xl">
            <div className="mx-auto ">
              <img alt="" onClick={() => selectWaifu(idMeal)} src={image} className=" rounded-lg px-3 shadow-md cursor-pointer" />
              <h5 className="pt-4 pr-10 pl-10 text-2xl font-semibold">{title}</h5>
              <div className="text-right pr-5">
                <button
                  onClick={() => {
                    addToFavorites(idMeal);
                  }}
                  className="text-justify pt-3 px-4 rounded-full text-2xl hover:scale-125"
                >
                  <BsHandThumbsUp />
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Waifus;
