import React from "react";
import { useState, useEffect } from "react";

export default function ModeSwitch({ handleLanguageChange, language }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
    /* localde dark modea karşılık gelen bir şey var ise değerini al */
  );

  /* handleLanguageChange appten prop olarak geçirildi */

  /* darkMode statei güncellenince çalışan useEffect */
  useEffect(() => {
    const body = document.body;
    body.classList.toggle("dark-mode", darkMode);
  
    const elementsToToggleDarkMode = [
      ".footer",
      ".modeText",
      ".lang",
      ".emailcss",
      ".techStack p",
      ".logo",
      ".isim",
      ".line",
      ".headerNav",
      ".heroLeft",
      ".skills",
      ".profileLine",
      ".profile",
      ".projects",
      ".button-2",
      ".button-1",
      ".sagF a",
      ".aciklama",
      ".details p",
    ];
  
    elementsToToggleDarkMode.forEach((elementSelector) => {
      const elements = document.querySelectorAll(elementSelector);
      elements.forEach((element) => {
        element.classList.toggle("dark-mode", darkMode);
      });
    });
  
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode, localStorage.getItem("darkMode")]);
  
  
  /* mod-degistir butonunu tersine çevirir. karanlık mod aç/kapat. */
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <div className="mode-degistir">
        <label className="toggle-switch">
          <input
            type="checkbox"
            className="toggle-switch-checkbox"
            onChange={handleToggle}
            checked={darkMode}
          />
          <span className="slider round"></span>
        </label>
        <div className="modeText">{darkMode ? "LIGHT MODE" : "DARK MODE"}</div>
        <div className="modeText">|</div>
        {language === "en" ? (
          <div className="modeText">
            <span
              className="lang"
              style={{ color: "#4731d3" }}
              onClick={handleLanguageChange}
            >
              TÜRKÇE
            </span>
            'YE GEÇ
          </div>
        ) : (
          <div className="modeText">
            <span className="lang" onClick={handleLanguageChange}>
              ENGLISH
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
