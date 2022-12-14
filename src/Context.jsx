import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const allWaifusUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomWaifuUrl = 'https://www.themealdb.com/api/json/v1/1/random.php/';

const getFavoritesFromLocalStorage = () => {
  let favorites = localStorage.getItem('favorites');
  if (favorites) {
    favorites = JSON.parse(localStorage.getItem('favorites'));
  } else {
    favorites = [];
  }
  return favorites;
};

const AppProvider = ({ children }) => {
  const [waifus, setWaifus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedWaifu, setSelectedWaifu] = useState(null);
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());

  const fetchWaifus = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      if (data.meals) {
        setWaifus(data.meals);
      } else {
        setWaifus([]);
      }
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  const fetchRandomWaifu = () => {
    fetchWaifus(`${randomWaifuUrl}${search}`);
  };

  const selectWaifu = (idMeal, favoriteWaifu) => {
    let waifu;
    if (favoriteWaifu) {
      waifu = favorites.find((waifu) => waifu.idMeal === idMeal);
    } else {
      waifu = waifus.find((waifu) => waifu.idMeal === idMeal);
    }
    setSelectedWaifu(waifu);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addToFavorites = (idMeal) => {
    const waifu = waifus.find((waifu) => waifu.idMeal === idMeal);
    const alreadyFavorite = favorites.find((waifu) => waifu.idMeal === idMeal);
    if (alreadyFavorite) return;
    const updatedFavorites = [...favorites, waifu];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (idMeal) => {
    const updatedFavorites = favorites.filter((waifu) => waifu.idMeal !== idMeal);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    fetchWaifus(`${allWaifusUrl}${search}`);
  }, [search]);

  return <AppContext.Provider value={{ loading, waifus, setSearch, fetchRandomWaifu, showModal, closeModal, selectedWaifu, selectWaifu, addToFavorites, removeFromFavorites, favorites }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
