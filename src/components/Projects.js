import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Projects({ language, darkMode }) {
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // API'den projeleri çekmek için kullanılacak işlev
  const fetchProjectsFromAPI = () => {
    axios
      .get("https://693886851923486588b15172e98aa299.api.mockbin.io/")
      .then((response) => {
        // Dil seçimine göre uygun projeleri set et
        setProjectsData(language === "en" ? response.data.projectsData : response.data.projectsDataTr);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects from API:", error);
        setLoading(false);
      });
  };

  // İlk render'da API'den projeleri çek
  useEffect(() => {
    fetchProjectsFromAPI();
  }, [language, darkMode]);

  const renderProjects = (projects) =>
    projects.map((project) => (
      <div className="projects-list" key={project.id}>
        <img src={project.img} alt="" />
        <h4 className={`${darkMode ? 'dark-mode' : ''}`}>{project.title}</h4>
        <p className={`aciklama ${darkMode ? 'dark-mode' : ''}`}>{project.description}</p>
        <div className={`techStack ${darkMode ? 'dark-mode' : ''}`}>
          {project.skills.map((skill, index) => (
            <p key={index} className={`${darkMode ? 'dark-mode' : ''}`}>{skill} </p>
          ))}
        </div>
        <div className="details">
          <a href={project.gitHub} target="_blank" rel="noreferrer">
            <p className={`${darkMode ? 'dark-mode' : ''}`}>GitHub</p>
          </a>
          <a href={project.projectSite} target="_blank" rel="noreferrer">
            <p className={`${darkMode ? 'dark-mode' : ''}`}>View Site</p>
          </a>
        </div>
      </div>
    ));

  return (
    <div className="projects">
      <span className="profileLine"></span>
      <h3>{language === "en" ? "Projects" : "Projelerim"}</h3>
      {loading ? <p>Loading...</p> : <div className="kartlarGrup">{renderProjects(projectsData)}</div>}
    </div>
  );
}
