import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { projectData} from "../data/data"

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("language"));
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");
  const [appData, setAppData] = useState({});

  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const fetchData = () => {
    axios.post("https://reqres.in/api/workintech", projectData)
      .then(response => {
        setAppData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData(); // Component mount olduğunda veriyi çek
  }, []); // Boş dependency array ile sadece bir kere çalışmasını sağla

  return (
    <AppContext.Provider
      value={{
        language,
        darkMode,
        setDarkMode,
        handleLanguageChange,
        appData,
        fetchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
