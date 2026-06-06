import React, { useEffect } from "react";
import "./CertificateModal.css";

export default function CertificateModal({ cert, onClose, theme }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!cert) return null;

  const d = cert.details;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        style={{ backgroundColor: theme.body }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          style={{ color: theme.text }}
          onClick={onClose}
        >
          ✕
        </button>

        <div className="modal-header">
          <div className="modal-header-text">
            <h2 className="modal-title" style={{ color: theme.text }}>
              {cert.title}
            </h2>
            <p className="modal-subtitle" style={{ color: theme.secondaryText }}>
              {cert.subtitle}
            </p>
          </div>
          <div className="modal-image-wrapper">
            <img
              className="modal-image"
              src={require(`../../assets/images/${cert.logo_path}`)}
              alt={cert.title}
            />
          </div>
        </div>

        <div className="modal-meta">
          <div className="meta-item" style={{ backgroundColor: theme.highlight }}>
            <span className="meta-label" style={{ color: theme.secondaryText }}>Formateur</span>
            <span className="meta-value" style={{ color: theme.text }}>{d.instructor}</span>
          </div>
          <div className="meta-item" style={{ backgroundColor: theme.highlight }}>
            <span className="meta-label" style={{ color: theme.secondaryText }}>Plateforme</span>
            <span className="meta-value" style={{ color: theme.text }}>{cert.alt_name}</span>
          </div>
          {d.students && (
            <div className="meta-item" style={{ backgroundColor: theme.highlight }}>
              <span className="meta-label" style={{ color: theme.secondaryText }}>Étudiants</span>
              <span className="meta-value" style={{ color: theme.text }}>{d.students}</span>
            </div>
          )}
          <div className="meta-item" style={{ backgroundColor: theme.highlight }}>
            <span className="meta-label" style={{ color: theme.secondaryText }}>Note</span>
            <span className="meta-value" style={{ color: theme.text }}>{d.rating}</span>
          </div>
          <div className="meta-item" style={{ backgroundColor: theme.highlight }}>
            <span className="meta-label" style={{ color: theme.secondaryText }}>Durée</span>
            <span className="meta-value" style={{ color: theme.text }}>{d.duration}</span>
          </div>
          <div className="meta-item" style={{ backgroundColor: theme.highlight }}>
            <span className="meta-label" style={{ color: theme.secondaryText }}>Date</span>
            <span className="meta-value" style={{ color: theme.text }}>{d.date}</span>
          </div>
        </div>

        <div className="modal-topics">
          <h3 className="topics-title" style={{ color: theme.text }}>
            Points couverts
          </h3>
          <ul className="topics-list">
            {d.topics.map((topic, i) => (
              <li
                key={i}
                className="topic-item"
                style={{ color: theme.secondaryText }}
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
