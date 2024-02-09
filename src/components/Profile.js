import React from "react";
import { useAppContext } from "../hook/context";
import { projectData} from "../data/data"

export default function Profile() {
  const {language} = useAppContext();
  const { ptitle, pdate, pcity, pedu, prol, pokul, plisans, pabout1, pabout2 } = projectData[language].profile;
  return (
    <div className="profile">
      <span className="profileLine"></span>
      <h3>{ptitle}</h3>
      <div className="profileBox1">
        <div className="profileBox">
          <h4>{ptitle}</h4>
          <div className="dogumTarihi">
            <div className="solBolum">
              <p>{pdate}</p>
              <p>{pcity}</p>
              <p>
                {pedu}
              </p>
              <br />
              <p>
                {prol}
              </p>
            </div>
            <div className="sagBolum">
              <p>06.08.1996</p>
              <p>Ankara</p>
              <p>
              {pokul}
                <br />
                {plisans}, 2018
                <br />
              </p>
              <p>Frontend, UI</p>
            </div>
          </div>
        </div>
          <div className="aboutMe">
            <h4>About Me</h4>
            <p>
            {pabout1}
              <br />
              <br />
            {pabout2}
            </p>
          </div>
      </div>
    </div>
  );
}
