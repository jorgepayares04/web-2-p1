// SportContext.js
import React, { createContext, useContext, useState } from 'react';


const SportContext = createContext();

export const SportProvider = ({ children }) => {
  const [sportsData, setSportsData] = useState([]);

  return (
    <SportContext.Provider value={{ sportsData, setSportsData }}>
      {children}
    </SportContext.Provider>
  );
};

export const useSportContext = () => {
  return useContext(SportContext);
};
