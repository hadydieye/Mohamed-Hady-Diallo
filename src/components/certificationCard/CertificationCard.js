import React from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

export default function CertificationCard({ certificate, theme, onClick }) {
  return (
    <Fade bottom duration={2000} distance="40px">
      <div
        className="cert-card"
        style={{ backgroundColor: theme.highlight }}
        onClick={() => onClick(certificate)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onClick(certificate)}
      >
        <div className="cert-image-wrapper">
          <img
            className="cert-image"
            src={require(`../../assets/images/${certificate.logo_path}`)}
            alt={certificate.title}
          />
        </div>
        <div className="cert-content">
          <h3 className="cert-title" style={{ color: theme.text }}>
            {certificate.title}
          </h3>
          <p className="cert-subtitle" style={{ color: theme.secondaryText }}>
            {certificate.subtitle}
          </p>
          <span
            className="cert-platform"
            style={{ backgroundColor: theme.headerColor, color: theme.text }}
          >
            {certificate.alt_name}
          </span>
        </div>
      </div>
    </Fade>
  );
}
