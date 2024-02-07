import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppContext } from '../hook/context';

export default function ModeSwitch() {
  
  const { language, handleLanguageChange, setDarkMode, darkMode } = useAppContext();

  /* başlangıçta sayfa açılınca seçili dile göre uyarı vermeli */
  const [defaultLanguage, setDefaultLanguage] = useState("");
  useEffect(() => {
    setDefaultLanguage(language);
  }, [language]);

  /* handleLanguageChange appten prop olarak geçirildi */

  /* darkMode statei güncellenince çalışan useEffect */
  useEffect(() => {

    // dark mode seçimine göre body stillendirmesi
    const body = document.body;
    body.classList.toggle("dark-mode", darkMode);


    // dark mode seçimine göre belli classların stillendirilmesi
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
      ".icon-style",
      ".icon-link"
    ];


    elementsToToggleDarkMode.forEach((elementSelector) => {
      const elements = document.querySelectorAll(elementSelector);
      elements.forEach((element) => {
        element.classList.toggle("dark-mode", darkMode);
      });
    });

    localStorage.setItem("darkMode", darkMode.toString());

    /* aldığımız language propuyla dark mode toastunun dilini de değiştirdik */

    const toastMessage = darkMode
      ? defaultLanguage === "en"
        ? "Dark mode is now enabled"
        : "Koyu mod şimdi etkin"
      : defaultLanguage === "en"
      ? "Dark mode is now disabled"
      : "Koyu mod şimdi devre dışı";

    // dile ve dark mode seçimine göre toastify mesaj stillendirmesi
    toast.dark(toastMessage, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        color: darkMode ? "white" : "black",
        background: darkMode ? "#333" : "#fff",
      },
    });
  }, [darkMode, localStorage.getItem("darkMode")]);

  /* mod-degistir butonunu tersine çevirir. karanlık mod aç/kapat. */
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <ToastContainer />
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
