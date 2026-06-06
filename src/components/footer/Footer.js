import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import ToggleSwitch from "./ToggleSwitch";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Copyright &copy; {new Date().getFullYear()} {greeting.title}
        </p>
        <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/>
      </Fade>
    </div>
  );
}
