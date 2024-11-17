import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [documents, setDocuments] = useState([]);
  const [insights, setInsights] = useState([]);
  const [queryResults, setQueryResults] = useState([]);

  return (
    <AppContext.Provider value={{ documents, setDocuments, insights, setInsights, queryResults, setQueryResults }}>
      {children}
    </AppContext.Provider>
  );
};
