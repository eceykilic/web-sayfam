import React from "react";
import { useAppContext } from "../hook/context";

export default function Profile() {
  const {language} = useAppContext();
  return (
    <div className="profile">
      <span className="profileLine"></span>
      <h3>{language === "en" ? "Profile" : "Profil"}</h3>
      <div className="profileBox1">
        <div className="profileBox">
          <h4>{language === "en" ? "Profile" : "Profil"}</h4>
          <div className="dogumTarihi">
            <div className="solBolum">
              <p>{language === "en" ? "Date of birth" : "Doğum tarihi"}</p>
              <p>{language === "en" ? "City of residence" : "İkamet şehri"}</p>
              <p>
                {language === "en" ? "Educational status" : "Eğitim bilgileri"}
              </p>
              <br />
              <p>
                {language === "en" ? "Preferred role" : "Tercih ettiği rol"}
              </p>
            </div>
            <div className="sagBolum">
              <p>06.08.1996</p>
              <p>Ankara</p>
              <p>
              {language === "en" ? "Bilkent University" : "Bilkent Üniversitesi"}
                <br />
                {language === "en" ? "Licence" : "Lisans"}, 2018
                <br />
              </p>
              <p>Frontend, UI</p>
            </div>
          </div>
        </div>
        {language === "en" ? (
          <div className="aboutMe">
            <h4>About Me</h4>
            <p>
              I quit my job to pursue my dreamjob: Full-Stack Developer.
              I am one of the selected candidates for 6-month full-stack web
              development online school, Workintech. 
              <br />
              <br />
              Everyday I am learning at least one new knowledge to improve myself. 
              I can easily cooperate with my coding team 
              thanks to my cooperation skills and communication experience. 
            </p>
          </div>
        ) : (
          <div className="aboutMe">
            <h4>Hakkımda</h4>
            <p>
              Hayallerimin mesleği olan Full-Stack Developer olmak için işimi bıraktım. Workintech
              kapsamında 6 aylık yazılım eğitimi için seçilen adaylardan biriyim. 
              <br />
              <br />
              Her gün en az bir yeni bilgi öğrenerek kendimi geliştiriyorum. 
              Takım arkadaşlarımla iletişim tecrübelerim
              sayesinde iş birliği yapabiliyorum.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
