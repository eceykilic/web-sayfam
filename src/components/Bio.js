import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { useAppContext } from "../hook/context";
import { projectData} from "../data/data";

export default function Bio() {
  //Bu iki state useAppContext custom hooku ile contexten alınıyor.
  const { language, darkMode } = useAppContext();
  const { bname, bh, bh2, biop, bhire } = projectData[language].bio;

  // dile göre ternary operatörü (şartlı) ile geçişler sağlıyoruz.

  // react scroll ile tıklanılan yere gidilirken animasyon sağlıyoruz.
  return (
    <div className="hero">
      <div className="heroLeft">
        <div className="isim">
          <div className="line"></div>
          <p>{bname}</p>  
        </div>
            <div className="isim-cont">
              <h2>
                {bh}
                <br />
                {bh2}
              </h2>
              <p className="isimP">{biop}
              </p>
            </div>
            <div className="buttons">
              <div className="button-1">              
                <Link to="footer" smooth={true} duration={2000}>
                  <p>{bhire}</p>
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
          
      </div>
      <img className="pp" src="./pp.png" alt="icon" />
    </div>
  );
}
