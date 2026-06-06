import React, { useState } from "react";
import "./Certifications.css";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import CertificateModal from "../../components/certificateModal/CertificateModal";
import { certifications } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Certifications(props) {
  const [selectedCert, setSelectedCert] = useState(null);
  const theme = props.theme;

  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            Certifications
          </h1>
        </Fade>
      </div>
      <div className="certs-grid">
        {certifications.certifications.map((cert) => (
          <CertificationCard
            key={cert.id}
            certificate={cert}
            theme={theme}
            onClick={setSelectedCert}
          />
        ))}
      </div>
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          theme={theme}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </div>
  );
}
