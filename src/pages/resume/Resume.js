import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import "./Resume.css";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import TopButton from "../../components/topButton/TopButton";

export default class ResumePage extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="resume-main">
        <Header theme={theme} onToggle={this.props.onToggle} />
        <div className="resume-view">
          <Fade bottom duration={2000} distance="40px">
            <div>
              <div className="download-btn">
                <Button
                  text="📃 Télécharger le CV"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}
