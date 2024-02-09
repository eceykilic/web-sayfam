import React from "react";
import { useAppContext } from "../hook/context";

export default function Footer() {
  const { language, appData } = useAppContext();
  

  // Veri yapısına uygun şekilde dil ve footer verilerini çekme
  const footerData = appData[language]?.footer || {};
  const { fh, fh2 } = footerData;

  return (
    <div className="footer">
      <h3 className="letsWork">
        {fh}
        <br />
        {fh2}
      </h3>
      <div className="rectangle">
        <a className="email" href="eceykilic@gmail.com">
          <img src=".\icons\el.svg" alt="icon" />
          <p className="emailcss">eceykilic@gmail.com</p>
        </a>

        <nav className="sagF">
          <a
            className="sagF2"
            href="https://github.com/eceykilic"
            target="_blank"
            rel="noreferrer"
          >
            Personal Blog
          </a>
          <a
            className="sagF2"
            href="https://github.com/eceykilic"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="sagF3"
            href="https://www.linkedin.com/in/ece-yucel-kilic-40b856150/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </nav>
      </div>
    </div>
  );
}
