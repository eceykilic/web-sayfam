import React from "react";
import { useAppContext } from "../hook/context";

export default function Skills() {
  const { language, appData } = useAppContext();
  
  // Veri yapısına uygun şekilde dil ve skills verilerini çekme
  const skillsData = appData[language]?.skills || [];

  return (
    <div className="skills">
      <h3>Skills</h3>
      <div className="skillsList">
        {skillsData.map((skill) => (
          <div className="skillsListGroup" key={skill.name}>
            <h4 className="skillAd">{skill.name}</h4>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
