import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const allWaifusUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomWaifuUrl = 'https://www.themealdb.com/api/json/v1/1/random.php/';

const AppProvider = ({ children }) => {
  const [waifus, setWaifus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

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

  useEffect(() => {
    fetchWaifus(`${allWaifusUrl}${search}`);
  }, [search]);

  return <AppContext.Provider value={{ loading, waifus, setSearch, fetchRandomWaifu }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
