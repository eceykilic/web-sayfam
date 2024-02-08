import React, { useState, useEffect } from "react";
import { trSkillsData, skillsData } from "../data/skills-data";
import { useAppContext } from "../hook/context";

// ternary kullanmadan skillleri maplemek

//diller ve karşılığında kullanılacak veriler
const languageSkillsMap = {
  tr: trSkillsData,
  en: skillsData,
};

export default function Skills() {
  const { language } = useAppContext();
  const [skillsDataFull, setSkillsDataFull] = useState([]);

  useEffect(() => {
    // Dil değiştiğinde, uygun veriyi set et
    setSkillsDataFull(languageSkillsMap[language] || []);
  }, [language]);

  return (
    <div className="skills">
      <h3>Skills</h3>
      <div className="skillsList">
        {skillsDataFull.map((skill) => (
          <div className="skillsListGroup" key={skill.name}>
            <h4 className="skillAd">{skill.name}</h4>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
