import React from "react";
import { useAppContext } from "../hook/context";

export default function Projects() {
  const { language, appData } = useAppContext();

  // Veri yapısına uygun şekilde dil ve projects verilerini çekme
  const projectsData = appData[language]?.projects || [];

  const renderProjects = (projects) =>
    projects.map((project) => (
      <div className="projects-list" key={project.id}>
        <img src={project.img} alt="" />
        <h4>{project.title}</h4>
        <p className="aciklama">{project.description}</p>
        <div className="techStack">
          {project.skills.map((skill, index) => (
            <p key={index}>{skill} </p>
          ))}
        </div>
        <div className="details">
          <a href={project.gitHub} target="_blank" rel="noreferrer">
            <p>GitHub</p>
          </a>
          <a href={project.projectSite} target="_blank" rel="noreferrer">
            <p>View Site</p>
          </a>
        </div>
      </div>
    ));

  return (
    <div className="projects">
      <span className="profileLine"></span>
      <h3>{language === "en" ? "Projects" : "Projelerim"}</h3>
      <div className="kartlarGrup">{renderProjects(projectsData)}</div>
    </div>
  );
}
