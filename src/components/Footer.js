import React from "react";


export default function Footer({ language }) {
  return (
    <div className="footer">
      {language === "en" ? (
        <h3 className="letsWork">
          Let's work together on 
          <br />
          your next product.
        </h3>
      ) : (
        <h3 className="letsWork">
          "Haydi sonraki projenizde
          <br />
          birlikte çalışalım.
        </h3>
      )}
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