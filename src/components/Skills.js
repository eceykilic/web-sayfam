import React, { useState, useEffect } from "react";
import { skillsData as importedSkillsData, trSkillsData } from "../data/skills-data";
import { useAppContext } from "../hook/context";

export default function Skills() {
  const {language} = useAppContext();
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    // Dil değiştiğinde, uygun veriyi set et
    setSkillsData(language === "en" ? importedSkillsData : trSkillsData);
  }, [language]);

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
