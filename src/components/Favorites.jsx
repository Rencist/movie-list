import React from 'react';
import { useGlobalContext } from '../Context';

const Favorites = () => {
  const { favorites, selectWaifu, removeFromFavorites } = useGlobalContext();

  return (
    <div className="bg-slate-500 p-5 grid-cols-4 px-52">
      <h1 className="text-white pl-5 text-2xl font-semibold pb-2">Favorites :</h1>
      <div className="flex flex-auto">
        {favorites.map((item) => {
          const { idMeal, strMealThumb: image } = item;
          return (
            <div key={idMeal} className="pl-5 pr-5">
              <img src={image} onClick={() => selectWaifu(idMeal, true)} alt="image" className="p-1 mb-3 w-20 rounded-full bg-white shadow-lg cursor-pointer hover:scale-125 transition-all duration-500" />
              <button
                className="text-white text-sm ml-2  px-2 bg-rose-500 rounded-full text-center"
                onClick={() => {
                  removeFromFavorites(idMeal);
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
