import React, { createContext, useContext, useState } from 'react';

// Context'i oluşturdum
const AppContext = createContext();

// Context'in kullanılacağı yerde kullanılacak bir provider oluşturdum
// uygulama içerisinde kullanılacak durumları ve işlevleri içerir.
export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState("");

  // Bu state'in varsayılan değeri, localStorage'da "darkMode" anahtarının değeridir.
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  //  mevcut dil durumuna bağlı olarak dil değişikliğini yapar ve 
  //yeni dil durumunu localStorage'da saklar.
  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        darkMode,
        setDarkMode,
        handleLanguageChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Context'i kullanmak için özel bir hook oluşturdum
// Bu hook, useContext hook'u kullanılarak context'in değerlerine erişim sağlar.
export const useAppContext = () => {
  return useContext(AppContext);
};
