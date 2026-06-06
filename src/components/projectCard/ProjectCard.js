import React from "react";
import "./ProjectCard.css";
import { Fade } from "react-reveal";

export default function ProjectCard({ project, theme }) {
  function openLink(url) {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  const linkUrl = project.liveLink || project.githubLink;

  return (
    <Fade bottom duration={2000} distance="40px">
      <div
        className="project-card"
        style={{ backgroundColor: theme.highlight }}
        onClick={() => openLink(linkUrl)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && openLink(linkUrl)}
      >
        <div className="project-card-image-wrapper">
          <img
            className="project-card-image"
            src={require(`../../assets/images/${project.imagePath}`)}
            alt={project.title}
          />
        </div>
        <div className="project-card-content">
          <h3 className="project-card-title" style={{ color: theme.text }}>
            {project.title}
          </h3>
          <p className="project-card-desc" style={{ color: theme.secondaryText }}>
            {project.description}
          </p>
          <div className="project-card-techs">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="project-card-tech"
                style={{
                  backgroundColor: theme.headerColor,
                  color: theme.text,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="project-card-links">
            {project.githubLink && (
              <span
                className="project-card-link project-card-github"
                style={{
                  borderColor: theme.text,
                  color: theme.text,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  openLink(project.githubLink);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.stopPropagation();
                    openLink(project.githubLink);
                  }
                }}
              >
                GitHub
              </span>
            )}
            {project.liveLink && (
              <span
                className="project-card-link project-card-live"
                style={{
                  backgroundColor: theme.text,
                  color: theme.body,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  openLink(project.liveLink);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.stopPropagation();
                    openLink(project.liveLink);
                  }
                }}
              >
                Demo
              </span>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
