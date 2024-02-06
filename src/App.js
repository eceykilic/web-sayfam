import "./App.css";
import ModeSwitch from "./components/ModeSwitch";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Footertail from "./components/Footertail"
import { useState, useEffect } from "react";

function App() {
  const [language, setLanguage] = useState("en");

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
    /* localde dark modea karşılık gelen bir şey var ise değerini al */
  );

  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <div className="App">
      <ModeSwitch
        language={language}
        handleLanguageChange={handleLanguageChange}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />
      <Header language={language} />
      <Bio language={language} />
      <div id="skills"></div>
      <Skills language={language} />
      <Profile language={language} />
      <div id="projects"></div>
      <Projects language={language} darkMode={darkMode} />
      <div id="footer"></div>
      <Footer language={language} />
      
    </div>
  );
}

export default App;

/* 
tailwind için bunu footer yerine yaz 
<Footertail language={language} /> */