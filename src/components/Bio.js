import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Bio({ language, darkMode }) {

  const [githubImage, setGithubImage] = useState(
    darkMode ? "./icons/githubdark.png" : "./icons/github.png"
  );
  const [linkedInImage, setLinkedInImage] = useState(
    darkMode ? "./icons/linkdark.png" : "./icons/LinkedIn.png"
  );

  useEffect(() => {
    console.log("Dark mode güncellendi:", darkMode);
  
    // Github resmi güncelleme
    setGithubImage(darkMode ? "./icons/githubdark.png" : "./icons/github.png");
  
    // LinkedIn resmi güncelleme
    setLinkedInImage(darkMode ? "./icons/linkdark.png" : "./icons/LinkedIn.png");
  }, [darkMode]);




  return (
    <div className="hero">
      <div className="heroLeft">
        <div className="isim">
          <div className="line"></div>
          {language === "tr" ? (<p>Ece Yücel Kılıç</p>) : (<p>Ece Yucel Kilic</p>)}  
        </div>
        {language === "en" ? (
          <>
            <div className="isim-cont">
              <h2>
                Former Interior Architect,
                <br />
                Passionate Full-Stack Developer
              </h2>
              <p className="isimP">Hello, I'm Ece. I'm a former interior architect. 
              I'm now a full-stack developer. If you are looking for a Developer who
              can combine her/his design skills with coding intelligence, I am the one.
              Let's collaborate with me.
              </p>
            </div>
            <div className="buttons">
              <div className="button-1">
                <Link to="footer" smooth={true} duration={2000}>
                  <p>Hire Me</p>
                </Link>
              </div>
              <div className="button-2">
                <FontAwesomeIcon icon={faGithub} className="icon-style" />
                <a
                  href="https://github.com/eceykilic"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>GitHub</p>
                </a>
              </div>
              <div className="button-2">
              <FontAwesomeIcon icon={faLinkedinIn} className="icon-link"/>
                <a
                  href="https://www.linkedin.com/in/ece-yucel-kilic-40b856150/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>LinkedIn</p>
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="isim-cont">
              <h2>
                "Eski İç Mimar,
                <br />
                Hırslı Bir Full-Stack 
                <br />
                Developer
              </h2>
              <p className="isimP">Merhaba, Ben Ece. İç mimarlık mesleğinden Full-Stack Developerlığa
              geçiş yaptım. Eğer tasarım yeteneğini kodlama yeteneğiyle birlikte kullanabilen bir
              yazılımcı arıyorsanız o kişi benim. Beraber çalışmak için hazırım.  
              </p>
            </div>
            <div className="buttons">
              <div className="button-1">
                <Link to="footer" smooth={true} duration={2000}>
                  <p>Beni İşe Al</p>
                </Link>
              </div>
              <div className="button-2">
                <FontAwesomeIcon icon={faGithub} className="icon-style"/>
                <a
                  href="https://github.com/eceykilic"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>GitHub</p>
                </a>
              </div>
              <div className="button-2">
              <FontAwesomeIcon icon={faLinkedinIn} className="icon-link"/>
                <a
                  href="https://www.linkedin.com/in/ece-yucel-kilic-40b856150/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>LinkedIn</p>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
      <img className="pp" src="./pp.png" alt="icon" />
    </div>
  );
}
