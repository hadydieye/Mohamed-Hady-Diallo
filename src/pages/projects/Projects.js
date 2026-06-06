import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/projectCard/ProjectCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  projects,
  projectsHeader,
} from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} onToggle={this.props.onToggle} />
        <div className="projects-container">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-header">
              <div className="projects-header-image">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-header-text">
                <h1 className="projects-title" style={{ color: theme.text }}>
                  {projectsHeader.title}
                </h1>
                <p className="projects-subtitle" style={{ color: theme.secondaryText }}>
                  {projectsHeader.description}
                </p>
              </div>
            </div>
          </Fade>
          <div className="projects-grid">
            {projects.data.map((project, i) => (
              <div key={project.id} style={{ animationDelay: `${i * 0.1}s` }}>
                <ProjectCard project={project} theme={theme} />
              </div>
            ))}
          </div>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
