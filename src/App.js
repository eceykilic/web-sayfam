import "./App.css";
import ModeSwitch from "./components/ModeSwitch";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Footertail from "./components/Footertail"
import { AppProvider } from './hook/context';

function App() {

  return (
    <AppProvider>

      <ModeSwitch/>
      <Header/>
      <Bio/>
      <Skills/>
      <Profile/>
      <Projects/>
      <Footer/>
    </AppProvider>
  );
}

export default App;

/* 
tailwind için bunu footer yerine yaz 
<Footertail language={language} /> */