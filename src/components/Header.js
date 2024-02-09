import React from "react";
import { Link } from "react-scroll";
import { useAppContext } from '../hook/context';

export default function Header() {
  const { language, appData } = useAppContext();

  // Check if appData[language] exists before destructuring
  const headerData = appData[language]?.header || {};
  const { skills, projectTitle, hireMe } = headerData;

  return (
    <header className="header">
      <p className="logo">E</p>

      <nav className="headerNav">
        <Link to="skills" smooth={true} duration={1000}>
          {skills}
        </Link>
        <Link to="projects" smooth={true} duration={2000}>
          {projectTitle}
        </Link>
        <Link to="footer" smooth={true} duration={3000}>
          {hireMe}
        </Link>
      </nav>
    </header>
  );
}
